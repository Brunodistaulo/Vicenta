import { Router } from "express";
import { createUserController, getAllUsersController } from "../controllers/userController";
const usersRoute = Router();

usersRoute.post("/register", createUserController)
usersRoute.get("/:id", createUserController)
usersRoute.get("/", getAllUsersController)


export default usersRoute