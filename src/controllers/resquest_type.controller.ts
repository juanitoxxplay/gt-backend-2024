import { Request, Response } from "express";
import { Resquest_TypesServices } from "../services";
export class Resquest_TypesController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await Resquest_TypesServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await Resquest_TypesServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await Resquest_TypesServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await Resquest_TypesServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await Resquest_TypesServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
