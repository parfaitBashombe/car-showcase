import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart, Heart, User, LogIn, UserPlus } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">CarShowcase</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link
            href="/cars"
            className="text-muted-foreground hover:text-foreground"
          >
            Cars
          </Link>
          <Link
            href="/parts"
            className="text-muted-foreground hover:text-foreground"
          >
            Parts
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
          <Link href="/register">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" /> Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
