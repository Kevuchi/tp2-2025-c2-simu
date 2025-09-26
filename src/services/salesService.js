import { findAllSales, findSaleById, findSaleEmail } from "../data/salesData.js";

export const getSales = async (page, pageSize) => {
    return await findAllSales(page, pageSize);
}
export const getSaleById = async id => await findSaleById(id);
export const getSaleByEmail = async email => await findSaleEmail(email);
