import { Request, Response } from "express";
import { EventRegistrationServices } from "../services";
export class EventRegistrationController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await EventRegistrationServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await EventRegistrationServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await EventRegistrationServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await EventRegistrationServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await EventRegistrationServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}