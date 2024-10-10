import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "bruno123",
    database: "vicenta",
    synchronize: true,
    logging: false,
    // dropSchema: true,
    entities: [Product,User],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const ProductModel = AppDataSource.getRepository(Product)