import { Request, Response } from "express";
import { accountservice } from "../services";
export class AccountController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await accountservice.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await accountservice.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await accountservice.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await accountservice.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await accountservice.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}