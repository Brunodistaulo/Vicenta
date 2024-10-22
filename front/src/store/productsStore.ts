import { IProducts } from "@/interfaces/IProducts";
import { create } from "zustand";



interface State {
    products: IProducts[];
    productDetail: IProducts | null;
    getProducts: () => void;
    getProductsById: (id: string) => void;
}


export const productsStore = create<State>((set) => ({
    products: [],
    productDetail: null,
    getProducts: async () => {
        try {
            const res = await fetch('http://localhost:8080/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            set({ products: data })
        } catch (error) {
            console.error('Error al obtener los productos: ',error)
        }
    },
    getProductsById: async (id: string) => {
        try {
            const res = await fetch(`http://localhost:8080/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            set({ productDetail: data })
        } catch (error) {
            console.error('Error al obtener los productos: ',error)
        }
    }
}))