import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { EmpleoyeeAssistanceServices } from "../services";
import { format } from "path";

class EmpleoyeeAssistanceValidator {
  public validateEmpleoyeeAssistance = [
    body("name").notEmpty().withMessage("EmpleoyeeAssistance Name is required"),
    body("name").isString().withMessage("EmpleoyeeAssistance Name must be string"),

    body("date").notEmpty().withMessage("EmpleoyeeAssistance date is required"),
    body("date").isDate().withMessage("EmpleoyeeAssistance date must be Date"),

    body("entry").notEmpty().withMessage("EmpleoyeeAssistance entry is required"),

    //Error en isTime() Revisar
//  body("entry").isTime().withMessage("EmpleoyeeAssistance entry must be Time"),

    body("exit").notEmpty().withMessage("EmpleoyeeAssistance exit is required"),

    //Error en isTime() Revisar
//  body("exit").isTime().withMessage("EmpleoyeeAssistance exit must be Time"),

    body("id_contract").notEmpty().withMessage("EmpleoyeeAssistance id_contract is required"),
    body("id_contract").isInt().withMessage("EmpleoyeeAssistance id_contract must be integer"),
  ];

  //un middleware en el caso de campo id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await EmpleoyeeAssistanceServices.getOne(id);
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
    const { status, message, data } = await EmpleoyeeAssistanceServices.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.EmpleoyeeAssistance;
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
        //caso si es para registrar un nuevo rol
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
}
export { EmpleoyeeAssistanceValidator };
