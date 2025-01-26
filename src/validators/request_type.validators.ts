import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { RequestTypeService } from "../services";

class RequestTypeValidator {
    public validatorRequestType = 
        [
            body("name").notEmpty().withMessage("The name of Request Types is required"),
            body("name").isString().withMessage("The name of Request Types must be a string"),
            body("bot").notEmpty().withMessage("Request Types bot is required"),
            body("bot").isBoolean().withMessage("Request Types bot must be a Boolean"),
        ];

        public validateIfIdExist = async (
            req: Request,
            res: Response,
            next: NextFunction
          ) => {
            const { id } = req.params;
            const { status, message, data } = await RequestTypeService.getOne(id);
            if (status == 500) {
              return res.status(status).json({
                message,
              });
            } else if (status == 404) {
              if (id) {
                return res.status(404).json({
                  errors: [
                    {
                      type: "field",
                      msg: `El parametro id : ${id}, no existe en la base de datos.`,
                      path: "id",
                      location: "param",
                    },
                  ],
                });
              }
            }
            next();
        };
        public validateIfNameIsUse = async (
            req: Request,
            res: Response,
            next: NextFunction
          ) => {
            const { id } = req.params;
            let { name } = req.body;
            const { status, message, data } = await RequestTypeService.findByName(name);
            if (status == 500) {
              return res.status(status).json({
                message,
              });
            } else if (status == 200) {
              const service: any = data?.RequestType;
              if (id) {
                //caso si es para actualizar datos
                if (id != service.id) {
                  return res.status(400).json({
                    errors: [
                      {
                        type: "field",
                        msg: `Nombre en uso : ${name}, para el registro actual`,
                        path: "name",
                        location: "body",
                      },
                    ],
                  });
                }
              } else {
                //caso si es para registrar una nueva atracción
                return res.status(400).json({
                  errors: [
                    {
                      type: "field",
                      msg: `Nombre en uso : ${name}, para el nuevo registro`,
                      path: "name",
                      location: "body",
                    },
                  ],
                });
              }
            }
            next();
          };      
};

export { RequestTypeValidator };
