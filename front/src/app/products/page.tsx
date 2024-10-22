'use client'
import React, { useEffect } from 'react'
import { productsStore } from '@/store/productsStore'
import Link from 'next/link'

const Products = () => {

    const getProducts = productsStore((state) => state.getProducts)
    const Products = productsStore((state) => state.products)

    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
        <div>
            <div className='flex justify-between items-center mt-10 px-5 '>
                <h1>{Products.length} Productos</h1>
                <p className='flex justify-center items-center gap-2'>Filtros
                    <svg width="18" height="12" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.31706 1.2381L4.43233 4.62812L0.547607 1.2381" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </p>
            </div>
            {Products.map((product) => (
                <Link href={`/products/${product.id}`} className='bg-white flex justify-between items-center gap-5 p-5 '>
                    <div>
                        <img src={product.images[0]} alt={product.name} />
                    </div>

                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price} ARS</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products