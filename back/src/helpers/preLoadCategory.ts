import { AppDataSource } from "../config/data-source";
import { Category } from "../entities/Category";

interface ICategory {
    name: string
}


const categoriesToPreLoad: ICategory[] = [
    {name : "Populares"},
    {name : "Más vendidos"},
    {name : "Vestidos"},
    {name : "Camisas"},
    {name : "Accesorios"},
]

export const preLoadCategory = async () => {
    const categoryRepository = AppDataSource.getRepository(Category)
    const categoryFound = await categoryRepository.find()
    if (!categoryFound.length) {
        await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute()
        console.log("categorias cargadas nashe")
    }
    return categoryFound
}