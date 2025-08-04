import Link from "next/link";
import { ICar } from "@/lib/data/cars";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface CarCardProps {
  car: ICar;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="rounded-2xl border border-muted bg-background shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Link href={`/cars/${car.carId}`} className="block">
        <div className="relative h-64 w-full">
          <img
            src={car.images[0]}
            alt={car.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-4 pt-4 space-y-1">
          <h3 className="text-lg font-semibold text-foreground">{car.title}</h3>
          <p className="text-sm text-muted-foreground">{car.brand}</p>
          <p className="text-base font-semibold text-foreground">
            ${car.price.toLocaleString()}
          </p>
        </div>
      </Link>
      <div className="flex justify-between items-center px-4 pt-3 pb-4">
        <Button size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="sm">
          <Heart className="mr-2 h-4 w-4" />
          Wishlist
        </Button>
      </div>
    </div>
  );
}
