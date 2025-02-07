import { Router } from "express";
import { detailsPurcharseOrderController } from "../controllers";
import { detailsPurcharseOrderValidator } from "../validators";
import { validateFields } from "../middlewares";

const router = Router();

router.get("/", detailsPurcharseOrderController.all);
router.get("/:id", detailsPurcharseOrderValidator.validateIfIdExist, detailsPurcharseOrderController.one);
router.post(
  "/",
  detailsPurcharseOrderValidator.validateDetails,
  validateFields,
  detailsPurcharseOrderController.create
);
router.put(
  "/:id",
  detailsPurcharseOrderValidator.validateIfIdExist,
  detailsPurcharseOrderValidator.validateDetails,
  validateFields,
  detailsPurcharseOrderController.update
);
router.delete("/:id", detailsPurcharseOrderValidator.validateIfIdExist, detailsPurcharseOrderController.delete);


export default router;
