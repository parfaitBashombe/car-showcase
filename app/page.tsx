import { Hero } from "@/components";
import CarCard from "@/components/CarCard";
import PartCard from "@/components/PartCard";
import { cars } from "@/lib/data/cars";
import { parts } from "@/lib/data/parts";
import Link from "next/link";

export default function Home() {
  const featuredCars = cars.slice(0, 4);
  const featuredParts = parts.slice(0, 4);

  return (
    <div className="container mx-auto">
      <Hero />
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Cars</h2>
          <Link href="/cars" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Parts</h2>
          <Link href="/parts" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredParts.map((part) => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>
      </section>
    </div>
  );
}
