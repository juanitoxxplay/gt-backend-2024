import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { purcharseOrderService } from "../services";

class PurcharseOrderValidator {
  public validateOrder = [
    body("order_date").notEmpty().withMessage("El número de orden es requerido"),
   
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