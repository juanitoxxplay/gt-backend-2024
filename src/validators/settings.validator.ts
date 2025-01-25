import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { SettingsServices} from "../services";

class SettingsValidators {
  public validateSettings = [
    body("name").notEmpty().withMessage("Setting Name is required"),
    body("name").isString().withMessage("Setting Name must be string"),
    body("formula").notEmpty().withMessage("Setting formule is required"),
    body("formula").isInt().withMessage("Setting formule must be Integer"),
  ];

 //un middleware en el caso de campo unico
 public validateIfIdExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ id } = req.body;
  const { status, message, data } = await SettingsServices.getOne(id);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
    
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El Settings id : ${id}, no existe`,
              path: "id",
              location: "body",
            },
          ],
        });
  }
  next();
};

public validateIfNameIsUse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  let { name } = req.body;
  const { status, message, data } = await SettingsServices.findByName(name);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 200) {
    const settings: any = data?.settings;
    if (id) {
      //caso si es para actualizar datos
      if (id != settings.id) {
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
export { SettingsValidators};
