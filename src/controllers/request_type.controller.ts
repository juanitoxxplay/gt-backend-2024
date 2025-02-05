import { Request, Response } from "express";
import { RequestTypeService } from "../services";
export class RequestTypeController {
    constructor () {

    }

    all = async (req: Request, res: Response) => {
        const { status, message, data } = await RequestTypeService.getAll();
        return res.status(status).json({
            message,
            data,
        });
    };

    one = async (req: Request, res: Response) => {
        const {id}=req.params
        const {status, message, data} = await RequestTypeService.getOne(Number(id));
        return res.status(status).json({
            message,
            data,
          });
    };
    create = async (req: Request, res: Response) => {
        const { status, message, data } = await RequestTypeService.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestTypeService.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await RequestTypeService.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
}