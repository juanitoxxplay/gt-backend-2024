import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { HotelServices, RoomServices, TypeRoomServices } from "../services";

class RoomValidator {
  public validateRoom = [
    body("id_typeRoom").notEmpty().withMessage("Id_typeRooms is required"),
    body("id_typeRoom").isInt().withMessage("Id_typeRooms must be integer number"),

    body("capacity").notEmpty().withMessage("The capacity of room is required"),
    body("capacity").isInt().withMessage("The capacity of room must be integer number"),
    body("capacity").isInt({ min: 1}).withMessage("The capacity of room must be of 1 or more peoples"),

    body("price").notEmpty().withMessage("The price of room is required"),
    body("price").isFloat().withMessage("The price of room must be number"),
    body("price").isFloat({ min: 0}).withMessage("The price of room not must be negative number"),

    body("id_hotel").notEmpty().withMessage("Id_hotel is required"),
    body("id_hotel").isInt().withMessage("Id_hotel must be integer number"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };
  
  // Verifica que no deban modificarse campos no modificables como status, createdAt o deleteAt
  public validateNonModifiableFieldInput = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id_room, status, createdAt, updatedAt, deletedAt } = req.body;
    if (
    (id_room !== undefined)   ||
    (status !== undefined)    ||
    (updatedAt !== undefined) ||
    (createdAt !== undefined) ||
    (deletedAt !== undefined)
  ) {
      return res.status(403).json({
        errors: [
          {
            type: "field",
            msg: `Los campos id, status, createdAt, updatedAt o deletedAt, no pueden crearse o modificarse de forma arbitraria o explícita.`,
            path: "id",
            location: "body",
          },
        ],
      });
    }
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
  
  // Un middleware en el caso de no existir el id para type room
  public validateIfIdTypeRoomExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id_typeRoom } = req.body;
    if (id_typeRoom){
     const { status, message, data } = await TypeRoomServices.getOne(id_typeRoom);
     if (status == 500) {
       return res.status(status).json({
         message,
       });
      } else if (status == 404) {
        return res.status(404).json({
          errors: [
            {
              type: "field",
              msg: `El tipo de habitación identificado por: ${id_typeRoom}, no existe en la base de datos.`,
              path: "id",
              location: "param",
            },
          ],
        }); 
      }
    } else {
      return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El id del tipo de habitación es equerido.`,
              path: "id",
              location: "body",
            },
          ],
      }); 
    }
    next();
  };

  // Un middleware en el caso de no existir el id para hotel
  public validateIfIdHotelExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id_hotel } = req.body;
    if (id_hotel){
     const { status, message, data } = await HotelServices.getOne(id_hotel);
     if (status == 500) {
       return res.status(status).json({
         message,
       });
      } else if (status == 404) {
        return res.status(404).json({
          errors: [
            {
              type: "field",
              msg: `El hotel identificado por: ${id_hotel}, no existe en la base de datos.`,
              path: "id",
              location: "param",
            },
          ],
        }); 
      }
    } else {
      return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El id del tipo de habitación es equerido.`,
              path: "id",
              location: "body",
            },
          ],
      }); 
    }
    next();
  };
  
}
export { RoomValidator };
