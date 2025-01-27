import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { RequestsServices, RequestTypeServices, JournalServices } from "../services"; 

class RequestsValidator {
  public validateRequest = [
    body("description").notEmpty().withMessage("This field is required"),
    body("description").isString().withMessage("The description of request must be string"),

    body("amount").notEmpty().withMessage("This amount is required"),
    body("amount").isFloat().withMessage("The amount must be double value"),

    body("name").notEmpty().withMessage("This field is required"),
    body("name").isString().withMessage("The transaction name must be string"),

    body("request_status").notEmpty().withMessage("The request status is required"),
    body("request_status").isIn(["PENDING", "APPROVED", "REJECTED"])
        .withMessage("The values of request status can be only 'PENDING', 'APPROVED' or 'REJECTED'."),

    body("bot").notEmpty().withMessage("This field is required"),
    body("bot").isBoolean().withMessage("The bot field must be boolean"),
  ];

 //un middleware para saber si existe el request type
 public validaterequest_type_id = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ request_type_id } = req.body;
  const { status, message, data } = await RequestTypeServices.getOne(request_type_id);
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
        return res.status(status).json({
          errors: [
            {
              type: "field",
              msg: `El campo request_type_id: ${request_type_id}, no existe en la base de datos`,
              path: "request_type_id",
              location: "body",
            },
          ],
        });
  }
  next();
};
  
 /* //un middleware para los constraints con journal
  public validate_constraint_journal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const{ request_id } = req.body;
  const { status, message, data } = await JournalServices.getAll();
  if (status == 500) {
    return res.status(status).json({
      message,
    });
  } else if (status == 404) {
    next();
  } else if (data?.Journals.find((journal) => journal.id == request_id)) {
    return res.status(status).json({
        errors: [
            {
              type: "constraint",
              msg: `El registro: ${request_id}, no se puede eliminar porque hay regiatros de journal asociados a el`,
              path: "request_id",
              location: "body",
            },
          ],
    })
  }
  next();
}; /**/
}export { RequestsValidator };