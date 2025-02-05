import { Router } from "express";
import { validateFields } from "../middlewares";
import { RoutesController } from "../controllers";
import { RoutesValidators } from "../validators";
const router = Router();
const routeValidator = new RoutesValidators();
const routeController = new RoutesController();

router.get("/", routeController.all);

router.get("/:id", routeController.one);

router.post(
  "/",
  routeValidator.validateRoutes,
  validateFields,
  routeController.create
);

router.put(
  "/:id",
  routeValidator.validateRoutes,
  validateFields,
  routeController.update
);

router.delete("/:id", routeController.delete); 
export default router;
