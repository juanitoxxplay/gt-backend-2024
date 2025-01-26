import { Request, Response } from "express";
import { SettingsServices } from "../services";
export class SettingsController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await SettingsServices.getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await SettingsServices.getOne(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await SettingsServices.create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log("Valor de id antes de llamar a update:", id);
    console.log(id);
    const { status, message, data } = await SettingsServices.update(
      Number(id),
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await SettingsServices.delete(Number(id));
    return res.status(status).json({
      message,
      data,
    });
  };
}
