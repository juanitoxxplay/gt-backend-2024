import { Router } from "express";
import { validateFields } from "../middlewares";
import { HotelController } from "../controllers";
import { HotelValidator } from "../validators";
const router = Router();
const hotelvalidator = new HotelValidator();
const hotelController = new HotelController();

router.get("/", hotelController.all);

router.get("/:id", hotelController.one);

router.post(
  "/",
  hotelvalidator.validateHotel,
  hotelvalidator.validateIfNameIsUse,
  hotelvalidator.validateIfIdSupervisorExist,
  validateFields,
  hotelController.create
);

router.put(
  "/:id",
  hotelvalidator.validateHotel,
  hotelvalidator.validateIfIdExist,
  hotelvalidator.validateIfNameIsUse,
  hotelvalidator.validateIfIdSupervisorExist,
  validateFields,
  hotelController.update
);

router.delete("/:id",
  hotelvalidator.validateIfIdExist,
  hotelController.delete); 

export default router;