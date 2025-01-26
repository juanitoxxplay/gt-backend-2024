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
  validateFields,
  settingValidator.validateIfNameIsUse,
  settingController.create
);

router.put(
  "/:id",
  settingValidator.validateSettings,
  validateFields,
  settingValidator.validateIfIdExist,
  settingValidator.validateIfNameIsUse,
  settingController.update
);

router.delete("/:id", settingController.delete);
export default router;
