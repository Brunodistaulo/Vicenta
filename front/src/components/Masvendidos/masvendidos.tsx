'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { productsStore } from '@/store/productsStore'

export default function ProductVendidos() {
    const Products = productsStore((state) => state.products)
    const getProducts = productsStore((state) => state.getProducts)
    const [scrollPosition, setScrollPosition] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getProducts()
    }, [getProducts])

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current
            const newPosition = direction === 'left'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth

            sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
            setScrollPosition(newPosition)
        }
    }

    return (
        <div className="w-full my-10 md:mt-14 lg:mt-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-medium text-hero-home">Más vendidos</h2>
                <a href="/products" className="text-black/80 ">Ver todos</a>
            </div>

            <div className="relative">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                    {Products.map((item) => (
                        <div key={item.id} className="flex-shrink-0 snap-start sm:w-1/2 md:w-80 p-2">
                            <img
                                src={item.images[0]}
                                alt={`Product ${item.name}`}
                                className="w-full h-48 lg:h-64 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex justify-end mt-4 space-x-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}