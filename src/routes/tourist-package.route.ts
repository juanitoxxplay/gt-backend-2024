import { Router } from "express";
import { validateFields } from "../middlewares";
import { TouristPackageController } from "../controllers";
import { TouristPackageValidator } from "../validators";
const router = Router();
const touristPackageValidator = new TouristPackageValidator();
const touristPackageController = new TouristPackageController();




router.get("/", touristPackageController.all);

router.get("/:id", touristPackageController.one);

router.post(
  "/",
  touristPackageValidator.validateTouristPackage,
  touristPackageValidator.validateIfNameIsUse,
  validateFields,
  touristPackageController.create
);

router.put(
  "/:id",
  touristPackageValidator.validateTouristPackage,
  touristPackageValidator.validateIfIdExist,
  touristPackageValidator.validateIfNameIsUse,
  validateFields,
  touristPackageController.update
);

router.delete("/:id", touristPackageController.delete); 
export default router;
