import Link from "next/link";
import { Part } from "@/lib/data/parts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface PartCardProps {
  part: Part;
}

export default function PartCard({ part }: PartCardProps) {
  return (
    <Card>
      <Link href={`/parts/${part.id}`}>
        <CardHeader>
          <div className="relative h-40 w-full">
            <img
              src={part.images[0]}
              alt={part.title}
              className="h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{part.title}</CardTitle>
          <p className="text-muted-foreground">{part.category}</p>
          <p className="mt-2 text-lg font-semibold">
            ${part.price.toLocaleString()}
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
