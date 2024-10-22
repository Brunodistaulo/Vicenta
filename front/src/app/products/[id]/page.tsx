'use client'

import React, { useEffect } from 'react'
import { productsStore } from '@/store/productsStore'
interface Props {
    params: {
        id: string
    }
}

const page: React.FC<Props>  = ({params}) => {

    const getProductsById = productsStore((state) => state.getProductsById)
    const ProductsById = productsStore((state) => state.products)

    useEffect(() => {
        getProductsById(params.id)
    }, [getProductsById, params.id])

    console.log(ProductsById)

  return (
    <div>
        {params.id}
    </div>
  )
}

export default page