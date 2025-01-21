import { Request, Response } from "express";
import { bookingtransportationservice } from "../services";
export class BookingTransportationController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await bookingtransportationservice.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await bookingtransportationservice.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await bookingtransportationservice.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await bookingtransportationservice.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await bookingtransportationservice.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}