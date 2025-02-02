import { Router } from "express";
import { validateFields } from "../middlewares";
import { RoomController } from "../controllers";
import { RoomValidator } from "../validators";
const router = Router();
const roomvalidator = new RoomValidator();
const roomController = new RoomController();

router.get("/", roomController.all);

router.get("/:id", roomController.one);

router.post(
  "/",
  roomvalidator.validateRoom,
  roomvalidator.validateIfIdHotelExist,
  roomvalidator.validateIfIdTypeRoomExist,
  validateFields,
  roomController.create
);

router.put(
  "/:id",
  roomvalidator.validateRoom,
  roomvalidator.validateIfIdHotelExist,
  roomvalidator.validateIfIdTypeRoomExist,
  roomvalidator.validateIfIdExist,
  validateFields,
  roomController.update
);

router.delete("/:id", roomController.delete); 

export default router;