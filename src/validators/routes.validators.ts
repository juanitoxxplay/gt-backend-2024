import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { RoutesServices } from "../services";

class RoutesValidators {
  public validateRoutes = [
    body("origin").notEmpty().withMessage("This field is required"),
    body("origin").isString().withMessage("The Origin must be string"),
    body("destination").notEmpty().withMessage("This field is required"),
    body("destination").isString().withMessage("The destination must be string"),
    body("duration").notEmpty().withMessage("The duration is required"),
    body("duration").isInt().withMessage("The duration must be integer"),
    body("price").notEmpty().withMessage("Price is required"),
    body("price").isFloat().withMessage("Price must be float"),
  ];

 //un middleware en el caso de campo unico
 public validatecategory_id = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ category_id } = req.body;
  const { status, message, data } = await RoutesServices.getOne(category_id);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
    
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El Caregory id : ${category_id}, no existe`,
              path: "category_id",
              location: "body",
            },
          ],
        });
  }
  next();
};
public validateid_unitMeasurement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ id_unitMeasurement } = req.body;
  const { status, message, data } = await RoutesServices.getOne(id_unitMeasurement);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
    
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El unitMeasurement id : ${id_unitMeasurement}, no existe`,
              path: "id_unitMeasurement",
              location: "body",
            },
          ],
        });
  }
  next();
};
}export { RoutesValidators };
