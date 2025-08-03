export type Car = {
  id: string;
  title: string;
  brand: string;
  type: string;
  description: string;
  price: number;
  images: string[];
};

export const cars: Car[] = [
  {
    id: "1",
    title: "Tesla Model S",
    brand: "Tesla",
    type: "Electric",
    description:
      "The Tesla Model S is a fully electric luxury sedan with a range of up to 405 miles. It features a minimalist interior with a 17-inch touchscreen display, and can accelerate from 0 to 60 mph in as little as 1.99 seconds.",
    price: 79990,
    images: ["/images/cars/tesla-model-s-1.png", "/images/cars/tesla-model-s-2.png"],
  },
  {
    id: "2",
    title: "Porsche 911",
    brand: "Porsche",
    type: "Sports Car",
    description:
      "The Porsche 911 is a classic sports car with a rear-engine layout. It is known for its iconic design and exceptional performance. The latest model features a twin-turbocharged flat-six engine and a top speed of over 190 mph.",
    price: 101200,
    images: ["/images/cars/porsche-911-1.png", "/images/cars/porsche-911-2.png"],
  },
  {
    id: "3",
    title: "Ford Mustang",
    brand: "Ford",
    type: "Muscle Car",
    description:
      "The Ford Mustang is an American icon, known for its powerful performance and classic styling. The latest model is available with a choice of a turbocharged four-cylinder or a 5.0-liter V8 engine.",
    price: 27205,
    images: ["/images/cars/ford-mustang-1.png", "/images/cars/ford-mustang-2.png"],
  },
  {
    id: "4",
    title: "BMW M3",
    brand: "BMW",
    type: "Sports Sedan",
    description:
      "The BMW M3 is a high-performance version of the BMW 3 Series. It features a powerful twin-turbocharged inline-six engine, and is available with either a manual or automatic transmission. The M3 is known for its exceptional handling and driving dynamics.",
    price: 70895,
    images: ["/images/cars/bmw-m3-1.png", "/images/cars/bmw-m3-2.png"],
  },
];
