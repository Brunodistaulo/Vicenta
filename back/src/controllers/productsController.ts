import { Request, Response } from "express";
import {getProducts} from "../services/productService";

export const productController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProductController = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}