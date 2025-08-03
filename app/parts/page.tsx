import { parts } from "@/lib/data/parts";
import PartCard from "@/components/PartCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PartsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Explore Our Car Parts</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <div className="p-4 rounded-lg border bg-card">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brakes">Brakes</SelectItem>
                    <SelectItem value="engine">Engine</SelectItem>
                    <SelectItem value="wheels">Wheels</SelectItem>
                    <SelectItem value="exterior">Exterior</SelectItem>
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
            {parts.map((part) => (
              <PartCard key={part.id} part={part} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
