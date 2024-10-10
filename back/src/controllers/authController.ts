import { Request, Response } from 'express';
import { authService } from '../services/authService';

export const authController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const authResponse = await authService(email, password);
        res.status(200).json(authResponse);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
