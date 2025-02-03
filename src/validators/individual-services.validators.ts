import { NextFunction, Request, Response } from "express";
import { body, check } from "express-validator";
import { serviceIndividualServices } from "../services";

class IndividualServiceValidator {
  public validateRole = [
    body("name").notEmpty().withMessage("Role Name is required"),
    body("name").isString().withMessage("Role Name must be string"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };
  
    // Verifica que el campo status no pueda actualizrse
  public validateIfExistStatusField = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { status } = req.body;
    if (status){
      return res.status(403).json({
        errors: [
          {
            type: "field",
            msg: `El campo status, no debe actualizarse.`,
            path: "id",
            location: "body",
          },
        ],
      });
    }
    next();
  };

  //un middleware en el caso de campo unico
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await serviceIndividualServices.getOne(id);
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
  //un middleware en el caso de campo unico
  public validateIfNameIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    let { name } = req.body;
    const { status, message, data } = await serviceIndividualServices.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.service;
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
        // caso si es para registrar un nuevo servicio
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `Nombre en uso : ${name}, para el nuevo servicio`,
              path: "name",
              location: "body",
            },
          ],
        });
      }
    }
    next();
  };
}
export { IndividualServiceValidator };
