import { cars } from "@/lib/data/cars";
import CarCard from "@/components/CarCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CarsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Explore Our Cars</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <div className="p-4 rounded-lg border bg-card">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Brand</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tesla">Tesla</SelectItem>
                    <SelectItem value="porsche">Porsche</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="sports-car">Sports Car</SelectItem>
                    <SelectItem value="muscle-car">Muscle Car</SelectItem>
                    <SelectItem value="sports-sedan">Sports Sedan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Price Range</label>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" />
                  <span>-</span>
                  <Input type="number" placeholder="Max" />
                </div>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </aside>
        <main className="md:col-span-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.carId} car={car} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
