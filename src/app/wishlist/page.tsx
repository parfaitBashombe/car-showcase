import CarCard from "@/components/CarCard";
import PartCard from "@/components/PartCard";
import { cars } from "@/lib/data/cars";
import { parts } from "@/lib/data/parts";

export default function WishlistPage() {
  const wishlistedCars = cars.slice(1, 3);
  const wishlistedParts = parts.slice(0, 2);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>
      <div>
        <h2 className="text-3xl font-bold mb-8">Cars</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {wishlistedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Parts</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {wishlistedParts.map((part) => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>
      </div>
    </div>
  );
}
