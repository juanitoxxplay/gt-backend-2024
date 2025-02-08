import { Router } from "express";
import { purcharseOrderController } from "../controllers";
import { purcharseOrderValidator } from "../validators";
import { validateFields } from "../middlewares";

const router = Router();

router.get("/", purcharseOrderController.all);
router.get("/:id", purcharseOrderValidator.validateIfIdExist, purcharseOrderController.one);
router.post(
  "/",
  purcharseOrderValidator.validateOrder,
  validateFields,
  purcharseOrderController.create
);
router.put(
  "/:id",
  purcharseOrderValidator.validateIfIdExist,
  purcharseOrderValidator.validateOrder,
  validateFields,
  purcharseOrderController.update
);
router.delete("/:id", purcharseOrderValidator.validateIfIdExist, purcharseOrderController.delete);

export default router;