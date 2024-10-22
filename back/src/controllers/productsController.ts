import { Request, Response } from "express";
import { getProducts, createProduct, editProductService, getProductById } from "../services/productService";

export const productController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProductController = async (req: Request, res: Response): Promise<any> => {
  try {
    // Verificar si hay archivos
    if (!req.files || !req.files.file) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const { name, price, description, categoryId, stock } = req.body;

    // Si se sube varias imágenes, req.files va a ser un array 
    const files = Array.isArray(req.files.file) ? req.files.file : [req.files.file];

    const imagePaths = files.map(file => file.tempFilePath);

    const product = await createProduct({
      name,
      price,
      description,
      images: imagePaths,
      categoryId: 1,
      stock
    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const editProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const { name, price, description, categoryId, stock } = req.body;

    let imagePaths: string[] = [];

    if (req.files && req.files.file) {
      const files = Array.isArray(req.files.file) ? req.files.file : [req.files.file];
      imagePaths = files.map(file => file.tempFilePath);
    }

    const updatedProduct = await editProductService(productId, {
      name,
      price,
      description,
      images: imagePaths.length > 0 ? imagePaths : undefined,
      categoryId,
      stock
    });

    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};