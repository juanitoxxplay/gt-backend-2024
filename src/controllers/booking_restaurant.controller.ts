import { Request, Response } from "express";
import { BookingrestaurantServices } from "../services";
export class BookingRestaurantController {
    constructor() {

    }

      all = async (req: Request, res: Response) => {
        const { status, message, data } = await BookingrestaurantServices.getAll();
        return res.status(status).json({
          message,
          data,
        });
      };

      one = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingrestaurantServices.getOne(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
    
      create = async (req: Request, res: Response) => {
        const { status, message, data } = await BookingrestaurantServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingrestaurantServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingrestaurantServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };

}