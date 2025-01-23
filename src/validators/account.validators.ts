import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { accountservice } from "../services";

class Accountvalidator {
    public validatoraccount = 
        [
            body("name").notEmpty().withMessage("The name of account is required"),
            body("name").isString().withMessage("The name of account must be a string"),
            body("type_account").notEmpty().withMessage("type account is required"),
            body("type_account").isString().withMessage("type account must be integer"), 
            body("status").notEmpty().withMessage("account status is required"),
            body("status").isBoolean().withMessage("account status must be a Boolean"),
        ];

        public validateIfIdExist = async (
            req: Request,
            res: Response,
            next: NextFunction
          ) => {
            const { id } = req.params;
            const { status, message, data } = await accountservice.getOne(id);
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
            const { status, message, data } = await accountservice.findByName(name);
            if (status == 500) {
              return res.status(status).json({
                message,
              });
            } else if (status == 200) {
              const service: any = data?.account;
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

export { Accountvalidator };
