import { cars } from "@/lib/data/cars";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = cars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img
            src={car.images[0]}
            alt={car.title}
            className="w-full rounded-lg"
          />
          <div className="mt-4 grid grid-cols-4 gap-4">
            {car.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${car.title} thumbnail ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div>
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
}
