"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[800px] w-full">
      <div className="absolute inset-0 bg-black/50" />
      <div className="h-full w-full overflow-hidden">
        <img
          src="https://ik.imagekit.io/zzot6yvyh/car-showcase/hero/hero.png?updatedAt=1754267389788"
          alt="Car Showcase"
          className="h-full w-full object-center overflow-hidden"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">
          Your One-Stop Shop for Cars and Parts
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Find the perfect car and the right parts for your vehicle. We have a
          wide selection of new and used cars, as well as a comprehensive
          catalog of car parts.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/cars">
            <Button size="lg">Explore Cars</Button>
          </Link>
          <Link href="/parts">
            <Button size="lg" variant="secondary">
              Shop Parts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
