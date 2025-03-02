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
        <div className='h-screen'>
            <div className='flex justify-between items-center mt-10 px-5 lg:px-10 '>
                <h1 className='lg:text-lg'>{Products.length} productos</h1>
                <p className='flex justify-center items-center gap-2'>Filtros
                    <svg width="18" height="12" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.31706 1.2381L4.43233 4.62812L0.547607 1.2381" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </p>
            </div>
            <div className='flex justify-center md:justify-start lg:px-20 px-2 items-center gap-3 md:gap-8 pt-10'>
                {Products.map((product) => (
                    <Link href={`/products/${product.id}`} className='bg-white w-72 md:w-64 h-[352px] flex flex-col rounded-xl shadow-md lg:shadow-lg items-center'>
                        <div className='w-full h-52'>
                            <img src={product.images[0]} alt={product.name} className='w-full h-full rounded-t-xl' />
                        </div>

                        <div className='w-full pt-2 h-36  flex flex-col justify-between'>
                            <div>
                                <h2 className='pl-2 lg:pl-3 font-medium text-hero-home uppercase'>{product.name}</h2>
                                {/* <p className='pl-2 lg:pl-3 text-sm text-hero-home/100'>{product.description}</p> */}
                                <p className='pl-2 lg:pl-3 text-sm text-hero-home/100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi.</p>
                            </div>
                            <div>
                                <p className='text-right text-lg lg:text-xl pt-2 lg:pt-4 pr-2 lg:pr-5 '>${product.price} ARS</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Products