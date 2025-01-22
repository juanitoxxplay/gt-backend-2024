import { Router } from "express";
import { validateFields } from "../middlewares";
import { AccountController } from "../controllers";
import { Accountvalidator } from "../validators";
const router = Router();
const accountvalidator = new Accountvalidator();
const accountController = new AccountController();




router.get("/", accountController.all);

router.get("/:id", accountController.one);

router.post(
  "/",
  accountvalidator.validatoraccount,
  accountvalidator.validateIfNameIsUse,
  validateFields,
  accountController.create
);

router.put(
  "/:id",
  accountvalidator.validatoraccount,
  accountvalidator.validateIfIdExist,
  accountvalidator.validateIfNameIsUse,
  validateFields,
  accountController.update
);

router.delete("/:id", accountController.delete); 
export default router;