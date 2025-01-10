import { Router } from "express";
import { validateFields } from "../middlewares";
import { AttractionController } from "../controllers";
import { Attractionvalidator } from "../validators";
const router = Router();
const attractionvalidator = new Attractionvalidator();
const attractioncontroller = new AttractionController();




router.get("/", attractioncontroller.all);

router.get("/:id", attractioncontroller.one);

router.post(
  "/",
  attractionvalidator.validatorattractions,
  attractionvalidator.validateIfNameIsUse,
  validateFields,
  attractioncontroller.create
);

router.put(
  "/:id",
  attractionvalidator.validatorattractions,
  attractionvalidator.validateIfIdExist,
  attractionvalidator.validateIfNameIsUse,
  validateFields,
  attractioncontroller.update
);

router.delete("/:id", attractioncontroller.delete); 
export default router;
