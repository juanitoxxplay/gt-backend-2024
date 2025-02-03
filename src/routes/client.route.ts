import { Router } from "express";
import { validateFields } from "../middlewares";
import { ClientController } from "../controllers";
import { ClientValidator} from "../validators";
const router = Router();
const clientValidator = new ClientValidator();
const clientController = new ClientController();




router.get("/", clientController.all);

router.get("/:id", clientController.one);

router.post(
  "/",
  clientValidator.validateClient,
  clientValidator.validateIfDocumentIsUse,
  validateFields,
  clientController.create
);

router.put(
  "/:id",
  clientValidator.validateClient,
  clientValidator.validateIfIdExist,
  clientValidator.validateIfDocumentIsUse,
  validateFields,
  clientController.update
);

router.delete("/:id", clientController.delete); 
export default router;
