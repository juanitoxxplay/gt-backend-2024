import { Request, Response } from "express";
import { EmpleoyeeAssistanceServices } from "../services";
export class EmpleoyeeAssistanceController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await EmpleoyeeAssistanceServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await EmpleoyeeAssistanceServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await EmpleoyeeAssistanceServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await EmpleoyeeAssistanceServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await EmpleoyeeAssistanceServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
