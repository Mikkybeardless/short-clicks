import type React from "react";
import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "sonner";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Short Clicks - Shorten URLs with Advanced Analytics",
  description:
    "Transform long URLs into short, memorable links. Get powerful analytics and insights about every click. Fast, reliable, and secure.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Toaster position="top-right" richColors />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
