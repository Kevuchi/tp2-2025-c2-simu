import { getDbSupplies } from "./connection.js";
import { ObjectId } from "mongodb";
export async function findAllSales(page, pageSize) {
    const db = getDbSupplies();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const sales = await db.collection("sales")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return sales;
    } else {
        // Sin paginación: trae todos los documentos
        const sales = await db.collection("sales").find().toArray();
        return sales;
    }
}
export async function findSaleById(id) {
    if (!id) throw new Error("Sale not provided")
    const db = getDbSupplies();
    const sale = await db.collection("sales").findOne({ _id: new ObjectId(id) });
    console.log(sale);
    return sale;
}
export async function findSaleEmail(email) {
    if (!email) throw new Error("Customer not provided")
    const db = getDbSupplies();
    const sale = await db.collection("sales").find({ "customer.email": email }).toArray();
    console.log(sale);
    return sale;
}
