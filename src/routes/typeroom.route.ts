import { Router } from "express";
import { validateFields } from "../middlewares";
import { TypeRoomController } from "../controllers";
import {TypeRoomValidator } from "../validators";
const router = Router();
const typeRoomValidator = new TypeRoomValidator();
const typeRoomController = new TypeRoomController();

router.get("/", typeRoomController.all);

router.get("/:id", typeRoomController.one);

router.post(
  "/",
  typeRoomValidator.validateTypeRoom,
  typeRoomValidator.validateIfNameIsUse,
  validateFields,
  typeRoomController.create
);

router.put(
  "/:id",
  typeRoomValidator.validateTypeRoom,
  typeRoomValidator.validateIfIdExist,
  typeRoomValidator.validateIfNameIsUse,
  validateFields,
  typeRoomController.update
);

router.delete("/:id", typeRoomController.delete); 
export default router;