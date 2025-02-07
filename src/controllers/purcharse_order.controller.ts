import { Request, Response } from "express";
import { purcharseOrderService } from "../services";

class PurcharseOrderController {
  public all = async (req: Request, res: Response) => {
    const { status, message, data } = await purcharseOrderService.getAll();
    res.status(status).json({ message, data });
  };

  public one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await purcharseOrderService.getOne(id);
    res.status(status).json({ message, data });
  };

  public create = async (req: Request, res: Response) => {
    const order = req.body;
    const { status, message, data } = await purcharseOrderService.create(order);
    res.status(status).json({ message, data });
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const order = req.body;
    const { status, message, data } = await purcharseOrderService.update(id, order);
    res.status(status).json({ message, data });
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await purcharseOrderService.delete(id);
    res.status(status).json({ message, data });
  };
}

export const purcharseOrderController = new PurcharseOrderController();