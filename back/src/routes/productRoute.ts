import { Router } from "express";
import {productController} from "../controllers/productsController";

const productRoute = Router();

productRoute.get("/", productController);

export default productRoute;
