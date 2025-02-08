import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { purcharseOrderService } from "../services";

class PurcharseOrderValidator {
  public validateOrder = [
    body("orderNumber").notEmpty().withMessage("El número de orden es requerido"),
    body("supplierName").notEmpty().withMessage("El nombre del proveedor es requerido"),
    body("totalAmount").isFloat({ gt: 0 }).withMessage("El monto total debe ser mayor a 0"),
  ];

  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await purcharseOrderService.getOne(id);

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

export const purcharseOrderValidator = new PurcharseOrderValidator();