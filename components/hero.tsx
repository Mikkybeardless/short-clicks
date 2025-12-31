"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Link2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");
  const [copied, setCopied] = useState(false);
  const [isShortening, setIsShortening] = useState(false);

  const handleShorten = async () => {
    if (url) {
      try {
        setIsShortening(true);
        const response = await fetch("/api/url", {
          method: "POST",
          body: JSON.stringify({ longUrl: url }),
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        toast.success("URL shortened successfully!");
        setShortened(data.shortenedUrl);
      } catch (error) {
        toast.error("Failed to shorten URL");
      } finally {
        setIsShortening(false);
      }
      // setShortened(`short.click/${shortId}`)
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortened);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Now with advanced analytics
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Shorten URLs.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Track everything.
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl text-balance leading-relaxed">
            Transform long, unwieldy links into short, memorable URLs. Get
            powerful analytics and insights about every click.
          </p>

          <div className="mx-auto mb-8 max-w-2xl space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Link2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your long URL here..."
                  className="h-12 pl-10 bg-card text-base border-border/50 focus:border-primary"
                />
              </div>
              <Button
                size="lg"
                onClick={handleShorten}
                className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              >
                {isShortening ? "Shortening..." : "Shorten URL"}
              </Button>
            </div>

            {shortened && (
              <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4 animate-in fade-in slide-in-from-top-2">
                <a href={shortened} target="_blank" rel="noopener noreferrer">
                  <code className="flex-1 text-left text-sm font-mono text-primary">
                    {shortened}
                  </code>
                </a>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className="h-8 w-8 p-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/auth/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
}
