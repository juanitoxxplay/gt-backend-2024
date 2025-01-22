import { Router } from "express";
import { validateFields } from "../middlewares";
import { BookingRestaurantController } from "../controllers";
import { BookingRestaurantValidator } from "../validators";
const bookingrestaurantValidator = new BookingRestaurantValidator();
const router = Router();
const bookingrestaurantcontroller=new BookingRestaurantController();
router.get("/", bookingrestaurantcontroller.all);//http://localhost:3850/api/bookingres
router.get("/:id", bookingrestaurantcontroller.one);//http://localhost:3850/api/bookingres/1
router.post("/",bookingrestaurantValidator.validateBookingrestaurant,bookingrestaurantValidator.validateid_reservation,validateFields,  bookingrestaurantcontroller.create);//http://localhost:3850/api/bookingres
router.put("/:id",bookingrestaurantValidator.validateBookingrestaurant,validateFields, bookingrestaurantcontroller.update);//http://localhost:3850/api/bookingres/1
router.delete("/:id", bookingrestaurantcontroller.delete);//http://localhost:3850/api/bookingres/1
export default router;