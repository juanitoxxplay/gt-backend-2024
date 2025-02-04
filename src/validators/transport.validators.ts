import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { TransportServices } from "../services";

class TransportValidator {
  public validateTransport = [
    body("model").notEmpty().withMessage("Transport Model is required"),
    body("model").isString().withMessage("Transport Model must be string"),
    body("capacity").notEmpty().withMessage("Capacity is required"),
    body("capacity").isNumeric().withMessage("Capacity must be a number"),
    body("status").notEmpty().withMessage("status is required"),
    body("status").isBoolean().withMessage("status must be a boolean"),
    body("id_route").notEmpty().withMessage("id_routes is required"),
    body("id_route").isNumeric().withMessage("id_routes must be a number"),  
    //body("id_vehicle").notEmpty().withMessage("id_vehicle is required"),
    //body("id_vehicle").isNumeric().withMessage("id_vehicle must be a number"),//se comentan por que no se realizaron sus cruds
    body("id_contract").notEmpty().withMessage("id_contract is required"),
    body("id_contract").isNumeric().withMessage("id_contract must be a number"),
  ];

  //un middleware en el caso de campo id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await TransportServices.getOne(id);
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
    const { status, message, data } = await TransportServices.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.Transport;
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
export {TransportValidator};
