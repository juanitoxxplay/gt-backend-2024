import { Router } from "express";
import { validateFields } from "../middlewares";
import { Account_RecordController } from "../controllers";
import { Account_RecordValidator } from "../validators";
const router = Router();
const Account_RecordsValidator = new Account_RecordValidator();
const Account_RecordsController = new Account_RecordController();

router.get("/", Account_RecordsController.all);

router.get("/:id", Account_RecordsController.one);

router.post(
  "/",
  Account_RecordsValidator.validateAccount_Record,
  Account_RecordsValidator.validateIfdescriptionIsUse,
  validateFields,
  Account_RecordsController.create
);

router.put(
  "/:id",
  Account_RecordsValidator.validateAccount_Record,
  Account_RecordsValidator.validateIfIdExist,
  Account_RecordsValidator.validateIfdescriptionIsUse,
  validateFields,
  Account_RecordsController.update
);

router.delete("/:id", Account_RecordsController.delete); 
export default router;
