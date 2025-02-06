import { Request, Response } from "express";
import { Account_RecordServices } from "../services";
export class Account_RecordController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await Account_RecordServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await Account_RecordServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await Account_RecordServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await Account_RecordServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await Account_RecordServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
