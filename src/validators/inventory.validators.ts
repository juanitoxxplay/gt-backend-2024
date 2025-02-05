import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { inventoryServices } from "../services";

class InventoryValidator {
  public validateinventory = [
    body("location").notEmpty().withMessage("Inventory Location is required"),
    body("location").isString().withMessage("Contract Location must be string"),
    body("note").notEmpty().withMessage("Inventory Note is required"),
    body("note").isString().withMessage("Inventory Note must be string"),
    body("quantity_in").notEmpty().withMessage("Inventory quantity income is required"),
    body("quantity_in").isFloat().withMessage("Inventory quantity income must be float"),
    body("current_quantity").notEmpty().withMessage("Inventory quantity current is required"),
    body("current_quantity").isFloat().withMessage("Inventory quantity current must be float"),
    body("id_product").notEmpty().withMessage("Inventory id_product is required"),
    body("id_product").isInt().withMessage("Inventory id_product must be integer"),
    body("id_departament").notEmpty().withMessage("Inventory id_departament is required"),
    body("id_departament").isInt().withMessage("Inventory id_departament must be integer"),
  ];

 //un middleware en el caso de campo unico
 public validateid_departament = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ id_departament } = req.body;
  const { status, message, data } = await inventoryServices.getOne(id_departament);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
    
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El departament id : ${id_departament}, no existe`,
              path: "id_departament",
              location: "body",
            },
          ],
        });
  }
  next();
};
public validateid_product = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ id_product } = req.body;
  const { status, message, data } = await inventoryServices.getOne(id_product);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
    
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El product id : ${id_product}, no existe`,
              path: "id_product",
              location: "body",
            },
          ],
        });
  }
  next();
};
}export { InventoryValidator };
