import { Request, Response } from "express";
import { HotelServices } from "../services";
export class HotelController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await HotelServices.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await HotelServices.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await HotelServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await HotelServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await HotelServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}