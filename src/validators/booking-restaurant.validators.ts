import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { BookingrestaurantServices } from "../services";

class BookingRestaurantValidator {
  public validateBookingrestaurant = [
    body("id_restaurant")
      .notEmpty()
      .withMessage("Booking restaurant Id_restaurant is required"),
    body("id_restaurant")
      .isInt()
      .withMessage("Booking restaurant Id_restaurant must be integer"),
    body("id_reservation")
      .notEmpty()
      .withMessage("Booking restaurant Id_reservation is required"),
    body("id_reservation")
      .isInt()
      .withMessage("Booking restaurant Id_reservation must be float"),
    body("reservation_rate")
      .notEmpty()
      .withMessage("Booking restaurant reservation_rate is required"),
    body("reservation_rate")
      .isInt()
      .withMessage("Booking restaurant reservation_rate must be float"),
    body("reservation_date")
      .notEmpty()
      .withMessage("Booking restaurant reservation_date is required"),
    body("reservation_date")
      .isDate()
      .withMessage("Booking restaurant reservation_date must be integer"),
  ];

  //el codigo que se dejo de jemplo no es un copiar  pegar simplemente, es analizar primero los atributos de tu tabla y ver que campos son foraneos que campos son unicos y que campos son primarios pára ver si hay que crear todos los middlewares por cada caso, es decir por cada campo.
  public validateid_restaaurant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id_restaurant } = req.body;
    const { status, message, data } = await BookingrestaurantServices.getOne(
      id_restaurant
    );
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 404) {
      return res.status(400).json({
        errors: [
          {
            type: "field",
            msg: `El restaurant id : ${id_restaurant}, no existe`,
            path: "id_restaurant",
            location: "body",
          },
        ],
      });
    }
    next();
  };
  public validateid_reservation = async (
    //cambiar el nombre como se menciono en routes y refactorizar este metodo
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id_reservation } = req.body; //si validaras por id_reservation, primero se extrae es de params porque definiste la ruta es :id, no :id_reservation deberia quedar es asi, const { id } = req.params; y pasar ese parametro por la funcion
    const { status, message, data } = await BookingrestaurantServices.getOne(
      id_reservation
    ); //no es id reservation es id
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 404) {
      return res.status(400).json({
        errors: [
          {
            type: "field",
            msg: `El reservation id : ${id_reservation}, no existe`,
            path: "id_reservation",
            location: "body",
          },
        ],
      });
    }
    next();
  };
}
export { BookingRestaurantValidator };
