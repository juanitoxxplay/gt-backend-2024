import { Request, Response } from "express";
import { unitMeasurementServices } from "../services";
export class UnitmeasurementController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await unitMeasurementServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await unitMeasurementServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await unitMeasurementServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await unitMeasurementServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await unitMeasurementServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
