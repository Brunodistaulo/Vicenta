import dotenv from "dotenv"
dotenv.config()

export const DB_NAME: string = process.env.DB_DATABASE || "db_name";
export const DB_USER: string = process.env.DB_USERNAME || "postgres";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "contraseña";
export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;