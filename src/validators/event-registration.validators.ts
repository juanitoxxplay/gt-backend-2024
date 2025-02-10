import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { EventRegistrationServices } from "../services";

class EventRegistrationValidator {
  public validateEventRegistration = [
    body("id_event").notEmpty().withMessage("Event ID is required"),
    body("id_event").isInt().withMessage("Event ID must be integer"),
    body("id_client").notEmpty().withMessage("Client ID is required"),
    body("id_client").isInt().withMessage("Client ID must be integer"),//se comentan por que no se realizaron sus cruds
    body("registrationDate").notEmpty().withMessage("Registration Date is required"),
    body("registrationDate").isDate().withMessage("Registration Date must be a valid date"),
    body("status").notEmpty().withMessage("Status is required"),
    body("status").isBoolean().withMessage("Status must be boolean"),
    body("unitPrice").notEmpty().withMessage("Unit Price is required"),
    body("unitPrice").isFloat().withMessage("Unit Price must be a number"),
  ];

  //un middleware en el caso de campo id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await EventRegistrationServices.getOne(id);
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
    const { status, message, data } = await EventRegistrationServices.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.EventRegistration;
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
export { EventRegistrationValidator };
