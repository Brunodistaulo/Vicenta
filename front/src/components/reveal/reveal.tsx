"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Reveal() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden pt-6 -mt-10">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Image
          src="/ropa.webp"
          alt="Fashion collection"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="font-bold mb-6 leading-tight relative">
              <span className="text-[#DCD7C9] text-4xl md:text-7xl">Descubre Tu Estilo Único Con Nuestra</span> {" "}
              <span className="text-[#A27B5C] text-4xl md:text-6xl">Exclusiva Selección De Moda.</span>
              <motion.div
                className="absolute inset-0 bg-[#2C3930]"
                initial={{ left: 0 }}
                animate={{ left: "100%" }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <div className="relative">
              <p className="text-xl md:text-2xl text-[#DCD7C9] mb-8">
                Elegancia y confort en cada prenda, diseñada para la mujer
                moderna
              </p>
              <motion.div
                className="absolute inset-0 bg-[#2C3930]"
                initial={{ left: 0 }}
                animate={{ left: "100%" }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Link href="/coleccion">
              <Button
                size="lg"
                className="bg-[#3F4F44] hover:bg-[#3F4F44]/90 text-[#DCD7C9]  text-lg px-8 py-6 rounded-lg font-semibold"
              >
                Explorar Colección
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="h-10 w-10 text-white animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
