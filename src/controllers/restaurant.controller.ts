import { Request, Response } from "express";
import { RestaurantServices } from "../services";

export class RestaurantController {
    constructor() {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await RestaurantServices.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const { id } = req.params
        const { status, message, data } = await RestaurantServices.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
        });
    };

    create = async (req: Request, res: Response) => {
        const { status, message, data } = await RestaurantServices.create(req.body);
        return res.status(status).json({
            message,
            data,
        });
    };
    update = async (req: Request, res: Response) => {
        const { id } = req.params
        const { status, message, data } = await RestaurantServices.update(Number(id), req.body);
        return res.status(status).json({
            message,
            data,
        });
    };

    delete = async (req: Request, res: Response) => {
        const { id } = req.params
        const { status, message, data } = await RestaurantServices.delete(Number(id));
        return res.status(status).json({
            message,
            data,
        });
    };
}