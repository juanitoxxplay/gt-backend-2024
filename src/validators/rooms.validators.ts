import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { HotelServices, RoomServices, TypeRoomServices } from "../services";

class RoomValidator {
  public validateRole = [
    body("id_typeRoom").notEmpty().withMessage("Id_typeRooms is required"),
    body("id_typeRoom").isInt().withMessage("Id_typeRooms must be integer number"),

    body("capacity").notEmpty().withMessage("The capacity of room is required"),
    body("capacity").isInt().withMessage("The capacity of room must be integer number"),
    body("capacity").isInt({ min: 0}).withMessage("The capacity of room not must be negative number"),

    body("price").notEmpty().withMessage("The price of room is required"),
    body("price").isFloat().withMessage("The price of room must be number"),
    body("price").isFloat({ min: 0}).withMessage("The price of room not must be negative number"),

    body("id_hotel").notEmpty().withMessage("Id_hotel is required"),
    body("id_hotel").isInt().withMessage("Id_hotel must be integer number"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };
  // Un middleware en el caso de no existir el id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await RoomServices.getOne(id);
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
  
  // Un middleware en el caso de no existir el id para hotel
  public validateIfIdHotelExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await HotelServices.getOne(id);
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
              msg: `El hotel identificado por: ${id}, no existe en la base de datos.`,
              path: "id",
              location: "param",
            },
          ],
        });
      }
    }
    next();
  };

  // Un middleware en el caso de no existir el id para type room
  public validateIfIdTypeRoomExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await TypeRoomServices.getOne(id);
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
              msg: `El TypeRoom identificado por: ${id}, no existe en la base de datos.`,
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
export { RoomValidator };
