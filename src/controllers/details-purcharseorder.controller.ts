import { Request, Response } from "express";
import { detailsPurcharseOrderService } from "../services";

class DetailsPurcharseOrderController {
  public all = async (req: Request, res: Response) => {
    const { status, message, data } = await detailsPurcharseOrderService.getAll();
    res.status(status).json({ message, data });
  };

  public one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await detailsPurcharseOrderService.getOne(id);
    res.status(status).json({ message, data });
  };

  public create = async (req: Request, res: Response) => {
    const detail = req.body;
    const { status, message, data } = await detailsPurcharseOrderService.create(detail);
    res.status(status).json({ message, data });
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const detail = req.body;
    const { status, message, data } = await detailsPurcharseOrderService.update(id, detail);
    res.status(status).json({ message, data });
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await detailsPurcharseOrderService.delete(id);
    res.status(status).json({ message, data });
  };
}

export const detailsPurcharseOrderController = new DetailsPurcharseOrderController();
