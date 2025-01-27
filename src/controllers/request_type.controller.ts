import { Request, Response } from "express";
import { RequestTypeServices } from "../services";

export class RequestTypeController {
    constructor() {}

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await RequestTypeServices.getAll();
        return res.status(status).json({
        message,
        data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestTypeServices.getOne(parseInt(id) as number);
        return res.status(status).json({
        message,
        data,
        });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await RequestTypeServices.create(req.body);
        return res.status(status).json({
        message,
        data,
        });
    };
    update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestTypeServices.update(parseInt(id) as number,req.body);
        return res.status(status).json({
        message,
        data,
        });
    };

    delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestTypeServices.delete(parseInt(id) as number);
        return res.status(status).json({
        message,
        data,
        });
    };
    
}