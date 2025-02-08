import { Router } from "express";
import { validateFields } from "../middlewares";
import { ResquestController } from "../controllers";
import { ResquestValidator } from "../validators";
const router = Router();
const ResquestsValidator = new ResquestValidator();
const ResquestsController = new ResquestController();

router.get("/", ResquestsController.all);

router.get("/:id", ResquestsController.one);

router.post(
  "/",
  ResquestsValidator.validateResquest,
  ResquestsValidator.validateIfdescriptionIsUse,
  validateFields,
  ResquestsController.create
);

router.put(
  "/:id",
  ResquestsValidator.validateResquest,
  ResquestsValidator.validateIfIdExist,
  ResquestsValidator.validateIfdescriptionIsUse,
  validateFields,
  ResquestsController.update
);

router.delete("/:id", ResquestsController.delete); 
export default router;
