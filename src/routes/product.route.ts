import { Router } from "express";
import { validateFields } from "../middlewares";
import { ProductController } from "../controllers";
import { ProductValidator } from "../validators";
const productValidator = new ProductValidator();
const router = Router();
const productController= new ProductController();
router.get("/", productController.all);//http://localhost:3850/api/products
router.get("/:id", productController.one);//http://localhost:3850/api/products/1
router.post("/",productValidator.validateProduct,productValidator.validatecategory_id,validateFields, productController.create);//http://localhost:3850/api/products
router.put("/:id",productValidator.validateProduct,validateFields,  productController.update);//http://localhost:3850/api/products/1
router.delete("/:id", productController.delete);//http://localhost:3850/api/products/1
export default router;