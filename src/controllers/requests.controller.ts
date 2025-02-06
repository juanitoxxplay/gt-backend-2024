import { Request, Response } from "express";
import { RequestsServices } from "../services";

export class RequestsController {

    constructor() {}

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await RequestsServices.getAll();
        return res.status(status).json({
        message,
        data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestsServices.getOne(parseInt(id) as number);
        return res.status(status).json({
        message,
        data,
        });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await RequestsServices.create(req.body);
        return res.status(status).json({
        message,
        data,
        });
    };
    update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestsServices.update(parseInt(id) as number,req.body);
        return res.status(status).json({
        message,
        data,
        });
    };

    delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestsServices.delete(parseInt(id) as number);
        return res.status(status).json({
        message,
        data,
        });
    };
    
}