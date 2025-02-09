import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { clientServices } from "../services";

class ClientValidator {
  public validateClient = [
    body("name").notEmpty().withMessage("Client Name is required"),
    body("name").isString().withMessage("Client Name must be string"),
    body("last_name").isString().withMessage("Client Last_Name must be string"),
    body("last_name").isString().withMessage("Client Last_Name must be string"),
    body("direction").isString().withMessage("Client Direction must be string"),
    body("direction").isString().withMessage("Client Direction must be string"),
    body("document").isString().withMessage("Client Document must be string"),
    body("document").isString().withMessage("Client Document must be string"),
    body("phone").notEmpty().withMessage("Client Phone is required"),
    body("phone").isNumeric().withMessage("Client Phone not is numeric"),
  ];

  //un middleware en el caso de campo id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await clientServices.getOne(id);
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
  public validateIfDocumentIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    let { document } = req.body;
    const { status, message, data } = await clientServices.findByDocument(document);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const service: any = data?.client;
      if (id) {
        //caso si es para actualizar datos
        if (id != service.id) {
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: `Documento en uso : ${document}, para el registro actual`,
                path: "document",
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
              msg: `Documento en uso : ${document}, para el nuevo registro`,
              path: "document",
              location: "body",
            },
          ],
        });
      }
    }
    next();
  };
}
export {ClientValidator};
