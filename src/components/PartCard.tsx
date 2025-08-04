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
    <div className="rounded-2xl border border-muted bg-background shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Link href={`/parts/${part.id}`} className="block">
        <div className="relative h-64 w-full">
          <img
            src={part.images[0]}
            alt={part.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-4 pt-4 space-y-1">
          <h3 className="text-lg font-semibold text-foreground">
            {part.title}
          </h3>
          <p className="text-sm text-muted-foreground">{part.category}</p>
          <p className="text-base font-semibold text-foreground">
            ${part.price.toLocaleString()}
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
