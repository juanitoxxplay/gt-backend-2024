import { Request, Response } from "express";
import { TouristPackageServices } from "../services";
export class TouristPackageController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await TouristPackageServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await TouristPackageServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await TouristPackageServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await TouristPackageServices.update(Number(id),req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await TouristPackageServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}