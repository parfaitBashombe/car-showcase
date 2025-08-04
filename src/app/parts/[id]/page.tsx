import { parts } from "@/lib/data/parts";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

export default function PartDetailPage({ params }: { params: { id: string } }) {
  const part = parts.find((p) => p.id === params.id);

  if (!part) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img
            src={part.images[0]}
            alt={part.title}
            className="w-full rounded-lg"
          />
          <div className="mt-4 grid grid-cols-4 gap-4">
            {part.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${part.title} thumbnail ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{part.title}</h1>
          <p className="text-muted-foreground text-xl mt-2">{part.category}</p>
          <p className="mt-4 text-lg">{part.description}</p>
          <div className="mt-8">
            <p className="text-3xl font-bold">${part.price.toLocaleString()}</p>
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
            <h2 className="text-2xl font-bold">Compatible With</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {part.compatibleWith.map((carModel) => (
                <li key={carModel}>{carModel}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
