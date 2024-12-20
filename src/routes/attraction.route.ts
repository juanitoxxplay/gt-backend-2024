import { Router } from "express";
import { validateFields } from "../middlewares";
import { AttractionController } from "../controllers";
import { attractionvalidator } from "../validators";
const router = Router();
const attractionvalidator = new attractionvalidator();
const categoryController = new CategoryController();




router.get("/", categoryController.all);

router.get("/:id", categoryController.one);

router.post(
  "/",
  caregoryValidator.validateCategory,
  caregoryValidator.validateIfNameIsUse,
  validateFields,
  categoryController.create
);

router.put(
  "/:id",
  caregoryValidator.validateCategory,
  caregoryValidator.validateIfIdExist,
  caregoryValidator.validateIfNameIsUse,
  validateFields,
  categoryController.update
);

router.delete("/:id", categoryController.delete); 
export default router;
