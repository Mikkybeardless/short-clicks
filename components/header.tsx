"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <svg
                className="h-5 w-5 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">
              Short Clicks
            </span>
          </Link>

          {!pathname.startsWith("/auth/") && (
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="#docs"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Documentation
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:inline-flex"
            >
              {pathname !== "/auth/login" && (
                <Link href="/auth/login">Log in</Link>
              )}
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {pathname !== "/auth/signup" && (
                <Link href="/auth/signup">Get Started</Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
