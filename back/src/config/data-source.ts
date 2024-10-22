import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { Category } from "../entities/Category";
import { Order } from "../entities/Orders";
import { DB_USER, DB_HOST, DB_PORT, DB_PASSWORD, DB_NAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    // dropSchema: true,
    entities: [Product,User,Category,Order],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const ProductModel = AppDataSource.getRepository(Product)
export const CategoryModel = AppDataSource.getRepository(Category)
export const OrderModel = AppDataSource.getRepository(Order)