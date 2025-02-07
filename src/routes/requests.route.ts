import { Router } from "express";
import { validateFields } from "../middlewares";
import { RequestsController } from "../controllers";
import { RequestsValidator } from "../validators";
const requestsValidator = new RequestsValidator();
const router = Router();
const requestsController=new RequestsController();
router.get("/", requestsController.all);

router.get("/:id", requestsController.one);

router.post("/",
    requestsValidator.validateRequest,
    requestsValidator.validaterequest_type_id,
    validateFields,
    requestsController.create
);

router.put("/:id",requestsValidator.validateRequest,
    requestsValidator.validaterequest_type_id,
    validateFields,
    requestsController.update
);

router.delete("/:id", requestsController.delete);

export default router;