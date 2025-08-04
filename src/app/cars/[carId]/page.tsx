"use client";

import React, { useEffect, useState } from "react";

import { cars, ICar } from "@/lib/data/cars";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

export type IUse = { carId: string };
export type SinglePageProps = { params: Promise<IUse> };

const Page = ({ params }: SinglePageProps) => {
  const { carId } = React.use(params);

  const [car, setCar] = useState<ICar | null | undefined>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const fetchOneCar = async () => {
    const oneCar = cars?.find((car) => car.carId === carId);
    if (oneCar) setCar(oneCar);
    else setCar(undefined);
  };

  useEffect(() => {
    fetchOneCar();
  }, []);

  if (car === null) {
    return <div>loading</div>;
  }

  if (car === undefined) {
    return <div>not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="col-span-2">
          <div className="h-[70vh]">
            <img
              src={car.images[selectedImageIndex]}
              alt={car.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {car.images.map((img, index) => (
              <div key={index} className="h-24">
                <img
                  src={img}
                  alt={`${car.title} thumbnail ${index + 1}`}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-full h-full overflow-hidden object-cover rounded-lg cursor-pointer ring-2 ${
                    index === selectedImageIndex
                      ? "ring-blue-500"
                      : " ring-zinc-500 "
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 py-4">
          <h1 className="text-4xl font-bold">{car.title}</h1>
          <p className="text-muted-foreground text-xl mt-2">{car.brand}</p>
          <p className="mt-4 text-lg">{car.description}</p>
          <div className="mt-8">
            <p className="text-3xl font-bold">${car.price.toLocaleString()}</p>
          </div>
          <div className="mt-8 flex gap-4">
            <Button size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Specifications</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <strong>Type:</strong> {car.type}
              </li>
              {/* Add more specs here if available */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
