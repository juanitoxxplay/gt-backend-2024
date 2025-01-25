import { Request, Response } from "express";
import { JournalServices } from "../services";

export class JournalController {

    constructor() {}

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await JournalServices.getAll();
        return res.status(status).json({
        message,
        data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await JournalServices.getOne(parseInt(id) as number);
        return res.status(status).json({
        message,
        data,
        });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await JournalServices.create(req.body);
        return res.status(status).json({
        message,
        data,
        });
    };
    update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await JournalServices.update(parseInt(id) as number,req.body);
        return res.status(status).json({
        message,
        data,
        });
    };

    delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await JournalServices.delete(parseInt(id) as number);
        return res.status(status).json({
        message,
        data,
        });
    };
    
}