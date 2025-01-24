import { Router } from "express";
import { validateFields } from "../middlewares";
import { EventRegistrationController } from "../controllers";
import { EventRegistrationValidator } from "../validators";
const router = Router();
const eventRegistrationValidator = new EventRegistrationValidator();
const eventRegistrationController = new EventRegistrationController();

router.get("/", eventRegistrationController.all);

router.get("/:id", eventRegistrationController.one);

router.post(
  "/",
  eventRegistrationValidator.validateEventRegistration,
  eventRegistrationValidator.validateIfNameIsUse,
  validateFields,
  eventRegistrationController.create
);

router.put(
  "/:id",
  eventRegistrationValidator.validateEventRegistration,
  eventRegistrationValidator.validateIfIdExist,
  eventRegistrationValidator.validateIfNameIsUse,
  validateFields,
  eventRegistrationController.update
);

router.delete("/:id", eventRegistrationController.delete); 
export default router;
