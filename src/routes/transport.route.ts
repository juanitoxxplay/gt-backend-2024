import { Router } from "express";
import { validateFields } from "../middlewares";
import { TransportController } from "../controllers";
import { TransportValidator } from "../validators";
const router = Router();
const transportValidator = new TransportValidator();
const transportController = new TransportController();

router.get("/", transportController.all);

router.get("/:id", transportController.one);

router.post(
  "/",
  transportValidator.validateTransport,
  transportValidator.validateIfNameIsUse,
  validateFields,
  transportController.create
);

router.put(
  "/:id",
  transportValidator.validateTransport,
  transportValidator.validateIfIdExist,
  transportValidator.validateIfNameIsUse,
  validateFields,
  transportController.update
);

router.delete("/:id", transportController.delete); 
export default router;