import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { RestaurantServices } from "../services";

class RestaurantValidator {
    public validaterestaurant = [
        body("name").notEmpty().withMessage("Inventory Location is required"),
        body("name").isString().withMessage("Contract Location must be string"),
        body("type").notEmpty().withMessage("Inventory Note is required"),
        body("type").isString().withMessage("Inventory Note must be string"),
        body("capacitance").notEmpty().withMessage("Inventory quantity income is required"),
        body("capacitance").isFloat().withMessage("Inventory quantity income must be float"),
        body("location").notEmpty().withMessage("Inventory quantity current is required"),
        body("location").isFloat().withMessage("Inventory quantity current must be float"),
        body("id_supervisor").notEmpty().withMessage("Inventory id_product is required"),
        body("id_supervisor").isInt().withMessage("Inventory id_product must be integer"),
    ];

    //un middleware en el caso de campo unico
    public validateid_supervisor = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { id_supervisor } = req.body;
        const { status, message, data } = await RestaurantServices.getOne(id_supervisor);
        if (status == 500) {
            return res.status(status).json({
                message,
            });
        } else if (status == 404) {

            return res.status(400).json({
                errors: [
                    {
                        type: "field",
                        msg: `El supervisor id : ${id_supervisor}, no existe`,
                        path: "id_supervisor",
                        location: "body",
                    },
                ],
            });
        }
        next();
    };
} export { RestaurantValidator };
