import { Router } from "express";
import { validateFields } from "../middlewares";
import { BookingController } from "../controllers";
import { BookingValidator } from "../validators";
const router = Router();
const bookingvalidator = new BookingValidator();
const bookingController = new BookingController();

router.get("/", bookingController.all);

router.get("/:id", bookingController.one);

router.post(
  "/",
  bookingvalidator.validateBooking,
  validateFields,
  bookingController.create
);

router.put(
  "/:id",
  bookingvalidator.validateBooking,
  bookingvalidator.validateIfIdExist,
  validateFields,
  bookingController.update
);

router.delete("/:id", bookingController.delete); 

export default router;