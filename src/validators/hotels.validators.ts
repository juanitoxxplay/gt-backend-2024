import { NextFunction, Request, Response } from "express";
import { body, check } from "express-validator";
import { HotelServices, SupervisorServices } from "../services";

class HotelValidator {
  public validateHotel = [
    body("name").notEmpty().withMessage("Hotel Name is required"),
    body("name").isString().withMessage("Hotel Name must be string"),
    
    body("zone").notEmpty().withMessage("Zone field is required"),
    body("zone").isString().withMessage("Zone field must be string"),
    
    body("tematic").notEmpty().withMessage("Tematic field is required"),
    body("tematic").isString().withMessage("Tematic field must be string"),
    
    body("stars").notEmpty().withMessage("Stars field is required"),
    body("stars").isFloat().withMessage("Stars field must be number"),
    body("stars").isFloat({ min: 0.0, max: 5.0}).withMessage("Stats field must be number between 0 or 5"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };

  // Verifica que el campo status no pueda actualizrse
  public validateIfExistStatusField = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { status } = req.body;
    if (status){
      return res.status(403).json({
        errors: [
          {
            type: "field",
            msg: `El campo status, no debe actualizarse.`,
            path: "id",
            location: "body",
          },
        ],
      });
    }
    next();
  };

  // un middleware en el caso de no existir el id
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { status, message, data } = await HotelServices.getOne(id);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 404) {
      if (id) {
        return res.status(404).json({
          errors: [
            {
              type: "field",
              msg: `El parametro id : ${id}, no existe en la base de datos.`,
              path: "id",
              location: "param",
            },
          ],
        });
      }
    }
    next();
  };
  // Un middleware en el caso de campo unico nombre
  public validateIfNameIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    let { name } = req.body;
    const { status, message, data } = await HotelServices.findByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const hotel: any = data?.hotel;
      if (id) {
        //caso si es para actualizar datos
        if (id != hotel.id) {
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: `Nombre en uso : ${name}, para el registro actual`,
                path: "name",
                location: "body",
              },
            ],
          });
        }
      } else {
        //caso si es para registrar un nuevo hotel
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `Nombre en uso : ${name}, para el nuevo hotel`,
              path: "name",
              location: "body",
            },
          ],
        });
      }
    }
    next();
  };
  
  // Un middleware en el caso de no existir el supevisor
  public validateIfIdSupervisorExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id_supervisor } = req.body;
    if (id_supervisor){
     const { status, message, data } = await SupervisorServices.getOne(id_supervisor);
     if (status == 500) {
       return res.status(status).json({
         message,
       });
      } else if (status == 404) {
        return res.status(404).json({
          errors: [
            {
              type: "field",
              msg: `El Supervisor identificado por: ${id_supervisor}, no existe en la base de datos.`,
              path: "id",
              location: "param",
            },
          ],
        }); 
      }
    } else {
      return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `El id del Supervisor es equerido.`,
              path: "id",
              location: "body",
            },
          ],
      }); 
    }
    next();
  };
}
export { HotelValidator };
