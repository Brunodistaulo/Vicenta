import { Router } from "express";
import productRoute from "./productRoute";
import usersRoute from "./usersRoute";
const router = Router();

router.use("/users", usersRoute);
router.use("/products", productRoute);

export default router