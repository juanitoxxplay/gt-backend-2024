import { Request, Response } from "express";
import { BookingRestaurantServices } from "../services";
export class BookingRestaurantController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await BookingRestaurantServices.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await BookingRestaurantServices.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await BookingRestaurantServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingRestaurantServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingRestaurantServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}