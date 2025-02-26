import { Router } from "express";
import { validateFields } from "../middlewares";
import { JournalController } from "../controllers";
import { JournalValitator } from "../validators";
const journalValitator = new JournalValitator();
const router = Router();
const journalController=new JournalController();
router.get("/", journalController.all);
router.get("/:id", journalController.one);
router.post("/",journalValitator.validateJournal,validateFields, journalController.create);
router.put("/:id",journalValitator.validateJournal,validateFields, journalController.update);
router.delete("/:id", journalController.delete);
export default router;