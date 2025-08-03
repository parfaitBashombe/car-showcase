export type Part = {
  id: string;
  title: string;
  category: string;
  description: string;
  compatibleWith: string[];
  price: number;
  images: string[];
};

export const parts: Part[] = [
  {
    id: "1",
    title: "Performance Brakes",
    category: "Brakes",
    description:
      "High-performance brake pads and rotors for improved stopping power. Made from a ceramic-carbon fiber composite material, these brakes are designed to withstand high temperatures and provide consistent performance on the track.",
    compatibleWith: ["Porsche 911", "BMW M3"],
    price: 1200,
    images: ["/images/parts/brakes-1.png", "/images/parts/brakes-2.png"],
  },
  {
    id: "2",
    title: "Turbocharger Kit",
    category: "Engine",
    description:
      "A complete turbocharger kit to boost your engine's performance. This kit includes a high-flow turbocharger, intercooler, and all necessary piping and hardware. It is designed to provide a significant increase in horsepower and torque.",
    compatibleWith: ["Ford Mustang", "BMW M3"],
    price: 2500,
    images: ["/images/parts/turbo-1.png", "/images/parts/turbo-2.png"],
  },
  {
    id: "3",
    title: "Alloy Wheels",
    category: "Wheels",
    description:
      "A set of lightweight alloy wheels to improve your car's appearance and handling. These wheels are made from a high-strength aluminum alloy and are designed to reduce unsprung weight. They are available in a variety of sizes and finishes.",
    compatibleWith: ["Tesla Model S", "Porsche 911", "Ford Mustang", "BMW M3"],
    price: 1800,
    images: ["/images/parts/wheels-1.png", "/images/parts/wheels-2.png"],
  },
  {
    id: "4",
    title: "Carbon Fiber Spoiler",
    category: "Exterior",
    description:
      "A carbon fiber spoiler to improve your car's aerodynamics and appearance. This spoiler is made from a lightweight carbon fiber material and is designed to provide downforce at high speeds. It is available in a variety of styles to suit your car's look.",
    compatibleWith: ["Porsche 911", "BMW M3"],
    price: 800,
    images: ["/images/parts/spoiler-1.png", "/images/parts/spoiler-2.png"],
  },
];
