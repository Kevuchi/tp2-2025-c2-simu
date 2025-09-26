import express from "express";
import { getAllSales, getSalesById, getSalesByEmail } from "../controllers/salesController.js";

const router = express.Router();
router.get("/", getAllSales);
router.get("/:id", getSalesById)
router.get("/customer/:email", getSalesByEmail)
export default router;
