import { Request, Response } from "express";
import { serviceIndividualServices } from "../services";
export class IndividualServiceController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await serviceIndividualServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await serviceIndividualServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await serviceIndividualServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await serviceIndividualServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await serviceIndividualServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
