import { Router } from "express";
import { validateFields } from "../middlewares";

import { AccountsController } from "../controllers";
import { AccountsValidator } from "../validators";
const router = Router();
const AccountValidator = new AccountsValidator();
const AccountController = new AccountsController();

router.get("/", AccountController.all);

router.get("/:id", AccountController.one);

router.post(
  "/",
  AccountValidator.validateAccounts,
  AccountValidator.validateIfNameIsUse,
  validateFields,
  AccountController.create

);

router.put(
  "/:id",
  AccountValidator.validateAccounts,
  AccountValidator.validateIfIdExist,
  AccountValidator.validateIfNameIsUse,
  validateFields,
  AccountController.update
);

router.delete("/:id", AccountController.delete); 
export default router;

