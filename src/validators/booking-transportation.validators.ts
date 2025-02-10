import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
//import { bookingtransportationservice } from "../services";

class BookingtransportationValidator {
  public validateBookingtransportation = [
    body("id_transport").notEmpty().withMessage("Transport Name is required"),
    body("id_transport").isInt().withMessage("Transport Name must be integer"),
//    body("id_booking").notEmpty().withMessage("Booking Name is required"),
 //   body("id_booking").isInt().withMessage("Booking Name must be integer"),
  ];

 /* //un middleware en el caso de campo id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await bookingtransportationservice.getOne(id);
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
  };*/
}
export { BookingtransportationValidator };