"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductSlider() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 ">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#A27B5C]">Más Populares</h2>
          <Button
            variant="outline"
            className="border-[#A27B5C] text-[#A27B5C] hover:bg-[#3F4F44] hover:text-[#DCD7C9] hover:border-[#3F4F44] hidden sm:block"
            onClick={() => router.push("/products")}
          >
            Ver todos
          </Button>
        </div>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-2">
                    <Card
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleCardClick(index + 1)}
                    >
                      <CardContent className="flex aspect-[280/360] items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-6 mt-4 sm:mt-10 justify-end mr-4 ">
              <CarouselPrevious className="static h-10 w-10 [&>svg]:scale-125 border border-[#2C3930] hidden sm:block" />
              <CarouselNext className="static h-10 w-10 [&>svg]:scale-125 border border-[#2C3930] hidden sm:block" />
              <Button
                variant="outline"
                className="border-[#A27B5C] text-[#A27B5C] hover:bg-[#3F4F44] hover:text-[#DCD7C9] hover:border-[#3F4F44] blocl sm:hidden"
                onClick={() => router.push("/products")}
              >
                Ver todos
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
