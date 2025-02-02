import { NextFunction, Request, Response } from "express";
import { body, check } from "express-validator";
import { BookingServices } from "../services";

class BookingValidator {
  public validateBooking = [
    body("date").notEmpty().withMessage("Date of booking is required"),
    body("date").isISO8601().withMessage("Date of booking must be valid").custom((value) => {
      const inputDate = new Date(value);
      const currentDate = new Date();
      // Comparar solo la fecha sin la hora
      inputDate.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);
      if (inputDate < currentDate) {
        throw new Error('La fecha de reservación no puede ser anterior a la fecha actual');
      }
      return true;
    }),

    body("state").notEmpty().withMessage("State of booking is required"),
    body("state").isBoolean().withMessage("State of booking must be true or false")
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
    if (typeof status != 'undefined'){
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
    const { status, message, data } = await BookingServices.getOne(id);
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
}
export { BookingValidator };
