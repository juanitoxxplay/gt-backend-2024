import { body } from "express-validator";
import { detailsPurcharseOrderService } from "../services";
import { Request, Response, NextFunction } from "express";

class DetailsPurcharseOrderValidator {
  public validateDetails = [
    body("id_order").notEmpty().withMessage("El campo 'id_order' es requerido"),
    body("id_product").notEmpty().withMessage("El campo 'id_product' es requerido"),
    body("unit_price").isDecimal().withMessage("El campo 'unit_price' debe ser un número decimal"),
    body("quantity").isInt().withMessage("El campo 'quantity' debe ser un número entero"),
  ];

  public validateIfIdExist = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { status, message } = await detailsPurcharseOrderService.getOne(id);

    if (status === 404) {
      return res.status(404).json({
        errors: [
          {
            type: "field",
            msg: `El id: ${id} no existe en la base de datos.`,
            path: "id",
            location: "param",
          },
        ],
      });
    }

    next();
  };
}

export const detailsPurcharseOrderValidator = new DetailsPurcharseOrderValidator();
