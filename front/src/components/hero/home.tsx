"use client";
import React, { useEffect } from "react";
import { productsStore } from "@/store/productsStore";
import Reveal from "../reveal/reveal";
import InfoCard from "../infoCards/info";
const Hero = () => {
  const getProducts = productsStore((state) => state.getProducts);
  const Products = productsStore((state) => state.products);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <Reveal />
      <InfoCard />
    </div>
  );
};

export default Hero;
