import { Request, Response } from "express";
import { createUserService, deleteUserService, getAllUsersService, getUsersByIdService } from "../services/userService";
import  IUser  from "../interface/IUser";
import UserDto from "../dto/UserDto";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, address, phone }  = req.body;
    const userData: UserDto = { name, email, password, address, phone };
    const newUser: IUser = await createUserService(userData);
    res.status(201).json(newUser);

  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Erroraquie" });
  }
}

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const getUsersByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUsersByIdService(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}