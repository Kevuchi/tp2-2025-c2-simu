import { getSales, getSaleById, getSaleByEmail } from "../services/salesService.js";

export const getAllSales = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const sales = await getSales(page, pageSize);
        res.json(sales);
    } catch (error) {
        console.log("Error fetching sales: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getSalesById = async (req, res) => {
    try {
        const sale = await getSaleById(req.params.id);
        if (!sale) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }
        res.json(sale);
    } catch (error) {
        console.log("Error fetching sale: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getSalesByEmail = async (req, res) => {
    try {
        const sale = await getSaleByEmail(req.params.email);
        if (!sale) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }
        res.json(sale);
    } catch (error) {
        console.log("Error fetching sale: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};