"use client";
import React, { useEffect } from "react";
import { productsStore } from "@/store/productsStore";
import Image from "next/image";
import Reveal from "../reveal/reveal";

const Hero = () => {
  const getProducts = productsStore((state) => state.getProducts);
  const Products = productsStore((state) => state.products);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="">
      {/* <div className="rounded-2xl shadow-lg flex justify-between bg-white w-[90%] md:w-[75%] lg:w-1/2 mx-auto">
        <div className="flex justify-between flex-col w-[60%] lg:w-1/2">
          <div className="font-jost flex flex-col justify-center w-full">
            <h1 className=" text-[26px] text-hero-home font-semibold md:text-3xl lg:text-4xl px-2 text-center pt-2 lg:pt-4">
              Blusa de seda.
            </h1>
            <p className="text-sm text-left lg:text-center lg:text-base p-2 lg:p-4 text-hero-home/100">
              Blusa de seda celeste con elegantes ataduras frontales, perfecta
              para un look sofisticado y moderno.
            </p>
          </div>
          <div className="lg:ml-6 ml-2 mb-2 lg:mb-4 animate-move-right">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="24"
                viewBox="0 0 29 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 12h26" />
                <path d="m26 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="rounded-2xl w-[40%] lg:w-1/2 h-48 lg:h-64">
          <Image
            className="w-full h-full rounded-2xl object-contain"
            src="/photoHome.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div> */}
      <Reveal />
    </div>
  );
};

export default Hero;
