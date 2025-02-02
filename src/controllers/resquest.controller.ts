import { Request, Response } from "express";
import { ResquestServices } from "../services";
export class ResquestController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await ResquestServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await ResquestServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await ResquestServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await ResquestServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await ResquestServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
