import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { JournalServices } from "../services";

class JournalValitator {
    public validateJournal = [
        body("resquest_id").notEmpty().withMessage("Inventory id_product is required"),
        body("resquest_id").isInt().withMessage("Inventory id_product must be integer"),
        body("id_account_records").notEmpty().withMessage("Inventory id_departament is required"),
        body("id_account_records").isInt().withMessage("Inventory id_departament must be integer"),
    ];

    //un middleware en el caso de campo unico
    public validaterequest_id = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    const{ request_id } = req.body;
    const { status, message, data } = await JournalServices.getOne(request_id);
    if (status == 500) {
        return res.status(status).json({
        message,
        });
    } else if (status == 404) {
        
            return res.status(400).json({
            errors: [
                {
                type: "field",
                msg: `El Request id : ${request_id}, no existe`,
                path: "request_id",
                location: "body",
                },
            ],
            });
    }
    next();
    };
    public validateaccount_record_id = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    const{ account_record_id } = req.body;
    const { status, message, data } = await JournalServices.getOne(account_record_id);
    if (status == 500) {
        return res.status(status).json({
        message,
        });
    } else if (status == 404) {
        
            return res.status(400).json({
            errors: [
                {
                type: "field",
                msg: `El account_record id : ${account_record_id}, no existe`,
                path: "account_record_id",
                location: "body",
                },
            ],
            });
    }
    next();
    };
}

export { JournalValitator };