import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { eventservice } from "../services";

class EventValidator {
  public validateEvent = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("description").notEmpty().withMessage("Description is required"),
    body("description").isString().withMessage("Description must be string"),
    body("date").notEmpty().withMessage("Date is required"),
    body("date").isDate().withMessage("Registration date must be a valid date"),
    body("id_attraccion").notEmpty().withMessage("ID Attraccion is required"),
    body("id_attraccion").isInt().withMessage("ID Attraccion must be integer"),
    body("capacity").notEmpty().withMessage("Capacity is required"),
    body("capacity").isInt().withMessage("Attraction's capacity must be integer"),
    body("ticketPrice").notEmpty().withMessage("TicketPrice is required"),
    body("ticketPrice").isDecimal().withMessage("Event Id must be integer"),
    body("id").notEmpty().withMessage("Event id is required"),
    body("id").isNumeric().withMessage("Event Id must be numeric"),
  ];
  public validateLogin = [
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("Email must be email"),
    body("password").notEmpty().withMessage("Passowrd is required"),
    body("password").isString().withMessage("Passowrd must be string"),
  ];

  //un middleware en el caso de campo unico
  public validateEventId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const{ role_id } = req.body;
    const { status, message, data } = await eventservice.getOne(role_id);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 404) {
      
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: `El role id : ${role_id}, no existe`,
                path: "role_id",
                location: "body",
              },
            ],
          });
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
    const { status, message, data } = await eventservice.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.event;
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

export { EventValidator };