import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({
    name: "products"
})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    category: string;

    @Column()
    stock: number;
}

