// src/routes/productRoute.ts
import { Router } from "express";
import { productController, createProductController, getProductController} from "../controllers/productsController";

const productRoute = Router();

productRoute.get("/", productController);

productRoute.get("/:id", getProductController);

productRoute.post("/create", createProductController);

export default productRoute;
