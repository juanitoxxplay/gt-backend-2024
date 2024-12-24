import { Router } from "express";
import { validateFields } from "../middlewares";
import { RestaurantController } from "../controllers";
import { RestaurantValidator } from "../validators";
const restaurantValidator = new RestaurantValidator();
const router = Router();
const restaurantController = new RestaurantController();
router.get("/", restaurantController.all);//http://localhost:3850/api/restaurants
router.get("/:id", restaurantController.one);//http://localhost:3850/api/restaurants/1
router.post("/", restaurantValidator.validaterestaurant, restaurantValidator.validateid_supervisor, validateFields, restaurantController.create);//http://localhost:3850/api/restaurants
router.put("/:id", restaurantValidator.validaterestaurant, validateFields, restaurantController.update);//http://localhost:3850/api/restaurants/1
router.delete("/:id", restaurantController.delete);//http://localhost:3850/api/restaurants/1
export default router;