import { Router } from "express";
import { validateFields } from "../middlewares";
import { EventController } from "../controllers/event.controller";
import { EventValidator } from "../validators/event.validators";
const router = Router();

const EventsValidator = new EventValidator();
const EventsController = new EventController();

router.get("/", EventsController.all);

router.get("/:id", EventsController.one);

router.post(
  "/",
  EventsValidator.validateEvent,
  EventsValidator.validateIfNameIsUse,
  validateFields,
  EventsController.create
);

router.put(
  "/:id",
  EventsValidator.validateEvent,
  EventsValidator.validateIfNameIsUse,
  validateFields,
  EventsController.update
);

router.delete("/:id", EventsController.delete); 
export default router;
