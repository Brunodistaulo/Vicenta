import { BadRequestException } from "@nestjs/common";
import { UserModel } from "../config/data-source";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKey';

export const authService = async (email: string, password: string) => {
    try {
        const user = await UserModel.findOneBy({ email });

        if (!user) {
            throw new BadRequestException('Credenciales incorrectas');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            throw new BadRequestException('Contraseña incorrecta');
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '5h' }
        );

        return {message: 'Autenticación exitosa',token};
        
    } catch (error:any) {
        throw new BadRequestException(error.message || 'Error durante la autenticación');
    }
};
