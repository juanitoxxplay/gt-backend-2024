import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { ResquestServices } from "../services";

class ResquestValidator {
  public validateResquest = [
    body("description").notEmpty().withMessage("Resquest description is required"),
    body("description").isString().withMessage("Resquest description must be string"),
  ];

  //un middleware en el caso de campo id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await ResquestServices.getOne(id);
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
  public validateIfdescriptionIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    let { description } = req.body;
    const { status, message, data } = await ResquestServices.findByDescription(description);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.Resquest;
      if (id) {
        //caso si es para actualizar datos
        if (id != service.id) {
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: `Nombre en uso : ${description}, para el registro actual`,
                path: "description",
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
              msg: `Nombre en uso : ${description}, para el nuevo registro`,
              path: "description",
              location: "body",
            },
          ],
        });
      }
    }
    next();
  };
}
export { ResquestValidator };
