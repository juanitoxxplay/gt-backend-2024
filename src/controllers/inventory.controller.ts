import { Request, Response } from "express";
import { inventoryServices } from "../services/inventory.service";
export class InventoryController {
    constructor() {

    }

      all = async (req: Request, res: Response) => {
        const { status, message, data } = await inventoryServices.getAll();
        return res.status(status).json({
          message,
          data,
        });
      };

      one = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await inventoryServices.getOne(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };
    
      create = async (req: Request, res: Response) => {
        const { status, message, data } = await inventoryServices.create(req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
      update = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await inventoryServices.update(Number(id),req.body);
        return res.status(status).json({
          message,
          data,
        });
      };
    
      delete = async (req: Request, res: Response) => {
        const {id}=req.params
        const { status, message, data } = await inventoryServices.delete(Number(id));
        return res.status(status).json({
          message,
          data,
        });
      };

}