import { Router } from "express";
import { validateFields } from "../middlewares";
import { InventoryController } from "../controllers";
import { InventoryValidator } from "../validators";
const inventoryValidator = new InventoryValidator();
const router = Router();
const inventoryController=new InventoryController();
router.get("/", inventoryController.all);//http://localhost:3850/api/inventories
router.get("/:id", inventoryController.one);//http://localhost:3850/api/inventories/1
router.post("/",inventoryValidator.validateinventory,inventoryValidator.validateid_departament,validateFields, inventoryController.create);//http://localhost:3850/api/inventories
router.put("/:id",inventoryValidator.validateinventory,validateFields, inventoryController.update);//http://localhost:3850/api/inventories/1
router.delete("/:id", inventoryController.delete);//http://localhost:3850/api/inventories/1
export default router;