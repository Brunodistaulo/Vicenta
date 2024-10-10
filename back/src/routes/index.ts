import { Router } from "express";
import productRoute from "./productRoute";
import usersRoute from "./usersRoute";
import authRoute from "./authRoute";
const router = Router();

router.use("/users", usersRoute);
router.use("/login", authRoute);
router.use("/products", productRoute);

export default router