import { Request, Response } from "express";
import { BookingRoomServices } from "../services";
export class BookingRoomController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await BookingRoomServices.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await BookingRoomServices.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await BookingRoomServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingRoomServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await BookingRoomServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}