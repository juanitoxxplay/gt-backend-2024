import { Router } from "express";
import { validateFields } from "../middlewares";
import { UnitmeasurementController } from "../controllers";
import { UnitMeasurementValidator } from "../validators";
const router = Router();
const unitmeasurementValidator = new UnitMeasurementValidator();
const unitmeasurementController = new UnitmeasurementController();




router.get("/", unitmeasurementController.all);

router.get("/:id", unitmeasurementController.one);

router.post(
  "/",
  unitmeasurementValidator.validateunitMeasurement,
  unitmeasurementValidator.validateIfNameIsUse,
  validateFields,
  unitmeasurementController.create
);

router.put(
  "/:id",
  unitmeasurementValidator.validateunitMeasurement,
  unitmeasurementValidator.validateIfIdExist,
  unitmeasurementValidator.validateIfNameIsUse,
  validateFields,
  unitmeasurementController.update
);

router.delete("/:id", unitmeasurementController.delete); 
export default router;
