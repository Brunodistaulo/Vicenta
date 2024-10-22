import React from 'react'
import Hero from '@/components/hero/home'
import ProductSlider from '@/components/Maspopulares/productSlider'
import ProductVendidos from '@/components/Masvendidos/masvendidos'
import Footer from '@/components/footer/footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductSlider />
      <ProductVendidos />
      <Footer />
    </div>
  )
}

export default Home