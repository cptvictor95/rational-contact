import express from "express";
import { addContactController } from "../controllers/add";
import { getContactController } from "../controllers/get";
import { updateContactController } from "../controllers/update";
import { deleteContactController } from "../controllers/delete";

const router = express.Router();

router.get("/", getContactController);

router.post("/add", addContactController);

router.put("/update/:id", updateContactController);

router.delete("/delete/:id", deleteContactController);

export default router;
