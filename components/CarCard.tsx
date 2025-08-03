import Link from "next/link";
import { Car } from "@/lib/data/cars";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card>
      <Link href={`/cars/${car.id}`}>
        <CardHeader>
          <div className="relative h-40 w-full">
            <img
              src={car.images[0]}
              alt={car.title}
              className="h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{car.title}</CardTitle>
          <p className="text-muted-foreground">{car.brand}</p>
          <p className="mt-2 text-lg font-semibold">
            ${car.price.toLocaleString()}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between">
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        <Button variant="outline">
          <Heart className="mr-2 h-4 w-4" /> Wishlist
        </Button>
      </CardFooter>
    </Card>
  );
}
