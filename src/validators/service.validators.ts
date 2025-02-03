import { NextFunction, Request, Response } from "express";
import { body, check } from "express-validator";
import { serviceIndividualServices } from "../services";

class IndividualServiceValidator {
  public validateIndividualService = [
    body("name").notEmpty().withMessage("Service Name is required"),
    body("name").isString().withMessage("Service Name must be string"),

    body("price").notEmpty().withMessage("Service Price is required"),
    body("price").isNumeric().withMessage("Service Price must be numeric"),
    body("price").isFloat({ min: 0.0 }).withMessage("Service price must be positive number.")
  ];

  // Verifica que no deban modificarse campos no modificables como status, createdAt o deleteAt
  public validateNonModifiableFieldInput = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id, status, createdAt, updatedAt, deletedAt } = req.body;
    if (
    (id !== undefined)        ||
    (status !== undefined)    ||
    (createdAt !== undefined) ||
    (updatedAt !== undefined) ||
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

  //un middleware en el caso de campo id
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
export { IndividualServiceValidator };
