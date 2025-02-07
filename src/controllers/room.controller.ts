import { Request, Response } from "express";
import { RoomServices } from "../services";
export class RoomController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await RoomServices.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await RoomServices.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await RoomServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RoomServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RoomServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}