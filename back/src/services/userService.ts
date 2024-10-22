import UserDto from "../dto/UserDto";
import { UserModel } from "../config/data-source";
import IUser from "../interface/IUser";
import { BadRequestException } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { Role } from "../enum/Role";

export const createUserService = async (userData: UserDto): Promise<IUser> => {
    const existingUser = await UserModel.findOneBy({ email: userData.email });
    
    if (existingUser) {
        throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser: IUser = UserModel.create({ 
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        password: hashedPassword,
        role: Role.USER
    });
    
    const savedUser = await UserModel.save(newUser);
    
    return savedUser;
};

export const getUsersByIdService = async (id: string) => {
    const user = await UserModel.findOneBy({id});
    return user;
};

export const getAllUsersService = async (): Promise<IUser[]> => {
    return await UserModel.find();
};

export const deleteUserService = async () => {
    //? A completar e implementar
};
