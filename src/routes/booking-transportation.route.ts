import { Router } from "express";
import { validateFields } from "../middlewares";
import { BookingTransportationController } from "../controllers";
import { BookingtransportationValidator } from "../validators";
const router = Router();
const bookingtransportationvalidator = new BookingtransportationValidator();
const bookingtransportationcontroller = new BookingTransportationController ();




router.get("/", bookingtransportationcontroller.all);

router.get("/:id", bookingtransportationcontroller.one);

router.post(
  "/",
  bookingtransportationvalidator.validateBookingtransportation,
 // bookingtransportationvalidator.validateIfNameIsUse,
  validateFields,
  bookingtransportationcontroller.create
);

router.put(
  "/:id",
  bookingtransportationvalidator.validateBookingtransportation,
  bookingtransportationvalidator.validateIfIdExist,
// bookingtransportationvalidator.validateIfNameIsUse,
  validateFields,
  bookingtransportationcontroller.update
);

router.delete("/:id", bookingtransportationcontroller.delete); 
export default router;
