import { Request, Response } from "express";
import { RoutesServices } from "../services";
export class RoutesController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await RoutesServices.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await RoutesServices.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await RoutesServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RoutesServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RoutesServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}