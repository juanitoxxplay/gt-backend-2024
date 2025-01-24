import { Router } from "express";
import { validateFields } from "../middlewares";
import { SupplierController } from "../controllers";
import { SupplierValidator} from "../validators";
const router = Router();
const supplierValidator = new SupplierValidator();
const supplierController = new SupplierController();




router.get("/", supplierController.all);

router.get("/:id", supplierController.one);

router.post(
  "/",
  supplierValidator.validateSupplier,
  supplierValidator.validateIfNameIsUse,
  validateFields,
  supplierController.create
);

router.put(
  "/:id",
  supplierValidator.validateSupplier,
  supplierValidator.validateIfIdExist,
  supplierValidator.validateIfNameIsUse,
  validateFields,
  supplierController.update
);

router.delete("/:id", supplierController.delete); 
export default router;
