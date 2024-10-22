export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    images: string[];
    categoryId: number;
    stock: number;
    caracteristics?: string[];
}