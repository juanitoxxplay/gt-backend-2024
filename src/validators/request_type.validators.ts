import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";

import { RequestTypeServices } from "../services";

class RequestTypeValidator {
  static validateRequestType(arg0: string, validateRequestType: any, validateFields: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined, create: any) {
      throw new Error("Method not implemented.");
  }
  public validateRequestType = [
    body("name").notEmpty().withMessage("This field is required"),
    body("name").isString().withMessage("The transaction name must be string"),
    body("bot").notEmpty().withMessage("This field is required"),
    body("bot").isBoolean().withMessage("The bot field must be boolean"),
  ];

  // un middleware en el caso de campo unico
  public validateIfNameIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    let { name } = req.body;
    const { status, message, data } = await RequestTypeServices.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const request_type: any = data?.request_type;
      if (id) {
        //caso si es para actualizar datos
        if (id != request_type.id) {
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: "Nombre en uso : ${name}, para el registro actual",
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
              msg: "Nombre en uso : ${name}, para el nuevo request type",
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

export { RequestTypeValidator };

