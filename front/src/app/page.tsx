import React from 'react'
import Hero from '@/components/hero/home'
import { ProductSlider } from '@/components/morePopular/productSlider'
import Footer from '@/components/footer/footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductSlider />
      <Footer />
    </div>
  )
}

export default Home