import { Router } from "express";
import { authController } from "../controllers/authController";

const authRoute = Router();

authRoute.post("/", authController);

export default authRoute;