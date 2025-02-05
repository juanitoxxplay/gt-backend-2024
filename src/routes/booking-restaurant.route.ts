import { Router } from "express";
import { validateFields } from "../middlewares";
import { BookingRestaurantController } from "../controllers";
import { BookingRestaurantValidator } from "../validators";
const bookingrestaurantValidator = new BookingRestaurantValidator();
const router = Router();
const bookingrestaurantcontroller = new BookingRestaurantController();
router.get("/", bookingrestaurantcontroller.all);
router.get("/:id", bookingrestaurantcontroller.one);
router.post(
  "/",
  bookingrestaurantValidator.validateBookingrestaurant,
  validateFields,//falta crear cada middleware por separado, deben verificar que los foraneos existan en sus propias tablas antes de registrar
  // falta crear el middleware que busque por el id_booking existe en el servicio_booking 
  // falta crear cada middlewareque que busque id_restaurante en el servicio de restaurante
  bookingrestaurantValidator.validateid_reservation,//este middleware no va aca, no debes buscar por id de la resrvacion porque es su primario y autoincrementable y deberia tener un nombre asi validateIdReservetionExist y se usa en el put no aca.
  bookingrestaurantcontroller.create
);
router.put(
  "/:id",
  bookingrestaurantValidator.validateBookingrestaurant,
  validateFields,
  //falta crear cada middleware por separado, deben verificar que los foraneos existan en sus propias tablas antes de registrar y verificar el caso de campo primario id_reservation ya que se actualiza si su primario existe en la bd
  // falta crear el middleware que busque por el id_booking existe en el servicio_booking 
  // falta crear cada middlewareque que busque id_restaurante en el servicio de restaurante
  // aqui debes validar el id que usaste en el post, y el parametro se llama id, debes extraer es id en el middleware
  bookingrestaurantcontroller.update
);
router.delete("/:id", bookingrestaurantcontroller.delete);
export default router;
