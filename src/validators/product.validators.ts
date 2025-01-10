import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { ProductServices } from "../services";

class ProductValidator {
  public validateProduct = [
    body("name").notEmpty().withMessage("Inventory Name is required"),
    body("name").isString().withMessage("Contract Name must be string"),
    body("unit_price").notEmpty().withMessage("Inventory quantity income is required"),
    body("unit_price").isFloat().withMessage("Inventory quantity income must be float"),
    body("cost_price").notEmpty().withMessage("Inventory quantity current is required"),
    body("cost_price").isFloat().withMessage("Inventory quantity current must be float"),
    body("sales_price").notEmpty().withMessage("Inventory quantity current is required"),
    body("sales_price").isFloat().withMessage("Inventory quantity current must be float"),
    body("category_id").notEmpty().withMessage("Inventory id_product is required"),
    body("category_id").isInt().withMessage("Inventory id_product must be integer"),
    body("id_unitMeasurement").notEmpty().withMessage("Inventory id_departament is required"),
    body("id_unitMeasurement").isInt().withMessage("Inventory id_departament must be integer"),
  ];

 //un middleware en el caso de campo unico
 public validatecategory_id = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ category_id } = req.body;
  const { status, message, data } = await ProductServices.getOne(category_id);
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
  const { status, message, data } = await ProductServices.getOne(id_unitMeasurement);
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
}export { ProductValidator };
