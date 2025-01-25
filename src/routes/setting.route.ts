import { Router } from "express";
import { validateFields } from "../middlewares";
import { SettingsController } from "../controllers";
import { SettingsValidators } from "../validators";
const router = Router();
const settingValidator = new SettingsValidators();
const settingController = new SettingsController();

router.get("/", settingController.all);

router.get("/:id", settingController.one);

router.post(
  "/",
 settingValidator.validateSettings,
  settingValidator.validateIfNameIsUse,
  validateFields,
  settingController.create
);

router.put(
  "/:id",
  settingValidator.validateSettings,
  settingValidator.validateIfIdExist,
  settingValidator.validateIfNameIsUse,
  validateFields,
  settingController.update
);

router.delete("/:id", settingController.delete); 
export default router;
