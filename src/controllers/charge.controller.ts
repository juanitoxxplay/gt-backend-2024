import { Request, Response } from "express";
import { ChargeServices } from "../services";
export class ChargeController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await ChargeServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await ChargeServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await ChargeServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await ChargeServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await ChargeServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
