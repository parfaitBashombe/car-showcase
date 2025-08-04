import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container mx-auto flex flex-col items-center justify-between p-8 md:flex-row">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} CarShowcase. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
