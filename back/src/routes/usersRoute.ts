import { Router } from "express";
import { createUserController, getAllUsersController, getUsersByIdController} from "../controllers/userController";
import { authController } from "../controllers/authController";
const usersRoute = Router();

usersRoute.post("/register", createUserController)
usersRoute.post("/login", authController)
usersRoute.get("/:id", getUsersByIdController)
usersRoute.get("/", getAllUsersController)


export default usersRoute