import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InportGroup — AI Department as a Service",
  description:
    "Hire one freelancer, get an entire specialized AI team. InportGroup delivers full-stack AI consultancy, development, and deployment for SMBs and startups.",
  keywords: ["AI consultancy", "AI development", "LLM", "machine learning", "full-stack", "freelance AI team"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-[#00FF41]">{children}</body>
    </html>
  );
}