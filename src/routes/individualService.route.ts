import { Router } from "express";
import { validateFields } from "../middlewares";
import { IndividualServiceController } from "../controllers";
import { IndividualServiceValidator } from "../validators";
const router = Router();
const individualserviceValidator = new IndividualServiceValidator();
const individualserviceController = new IndividualServiceController();

router.get("/", individualserviceController.all);

router.get("/:id", individualserviceController.one);

router.post(
  "/",
  individualserviceValidator.validateIndividualService,
  individualserviceValidator.validateIfNameIsUse,
  individualserviceValidator.validateNonModifiableFieldInput,
  validateFields,
  individualserviceController.create
);

router.put(
  "/:id",
  individualserviceValidator.validateIndividualService,
  individualserviceValidator.validateIfIdExist,
  individualserviceValidator.validateIfNameIsUse,
  individualserviceValidator.validateNonModifiableFieldInput,
  validateFields,
  individualserviceController.update
);

router.delete("/:id",
  individualserviceValidator.validateIfIdExist,
  individualserviceController.delete); 
export default router;
