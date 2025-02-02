import { Router } from "express";
import { validateFields } from "../middlewares";
import { Resquest_TypesController } from "../controllers";
import { Resquest_TypesValidator } from "../validators";
const router = Router();
const Resquest_TypeValidator = new Resquest_TypesValidator();
const Resquest_TypeController = new Resquest_TypesController();

router.get("/", Resquest_TypeController.all);

router.get("/:id", Resquest_TypeController.one);

router.post(
  "/",
  Resquest_TypeValidator.validateResquest_Types,
  Resquest_TypeValidator.validateIfNameIsUse,
  validateFields,
  Resquest_TypeController.create
);

router.put(
  "/:id",
  Resquest_TypeValidator.validateResquest_Types,
  Resquest_TypeValidator.validateIfIdExist,
  Resquest_TypeValidator.validateIfNameIsUse,
  validateFields,
  Resquest_TypeController.update
);

router.delete("/:id", Resquest_TypeController.delete); 
export default router;
