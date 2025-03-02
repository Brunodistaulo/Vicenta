'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart } from 'lucide-react'
import { productsStore } from '@/store/productsStore'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  params: {
    id: string
  }
}

export default function ProductDetail({ params }: Props) {
  const getProductsById = productsStore((state) => state.getProductsById)
  const product = productsStore((state) => state.productDetail)

  useEffect(() => {
    getProductsById(params.id)
  }, [getProductsById, params.id])

  const renderContent = () => {
    if (!product) {
      return (
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="aspect-square w-full h-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-10 w-1/3" />
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-12 h-12" />
              ))}
            </div>
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-24 w-full" />
            <div className="flex space-x-4">
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="w-12 h-12" />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{product.name}</p>
          <p className="text-3xl font-bold text-gray-900 mb-4">${product.price} ARS</p>
          <div className="flex space-x-2 mb-4">
            {['XL', 'L', 'S'].map((size) => (
              <Button key={size} variant="outline" className="w-12 h-12">
                {size}
              </Button>
            ))}
          </div>
          <p className="text-sm text-green-600 mb-4">
            ✓ Stock
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className='text-xl'>Descripción</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{product.description}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex space-x-4">
            <Button className="flex-1">Añadir al carrito</Button>
            <Button variant="outline" className="w-10 h-10 flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver
      </Link>
      {renderContent()}
    </div>
  )
}