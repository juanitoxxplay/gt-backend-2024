import { Request, Response } from "express";
import { empleoyeeServices } from "../services";
export class EmpleoyeeController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await empleoyeeServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await empleoyeeServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await empleoyeeServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await empleoyeeServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await empleoyeeServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
