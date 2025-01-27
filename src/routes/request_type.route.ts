import { Router } from "express";
import { validateFields } from "../middlewares";
import { RequestTypeController } from "../controllers";
import { RequestTypeValidator } from "../validators";
const router = Router();
const requestTypeValidator = new RequestTypeValidator();
const requestTypeController = new RequestTypeController();
router.get("/", requestTypeController.all);

router.get("/:id", requestTypeController.one);

router.post("/",
    requestTypeValidator.validateRequestType,
    requestTypeValidator.validateIfNameIsUse,
    validateFields, requestTypeController.create
);

router.put("/:id",
    requestTypeValidator.validateRequestType,
    requestTypeValidator.validateIfNameIsUse,
    validateFields,
    requestTypeController.update
);
router.delete("/:id", requestTypeController.delete);

export default router;