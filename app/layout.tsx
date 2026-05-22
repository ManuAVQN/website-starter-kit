import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Starter Kit",
  description: "Next.js + Tailwind v4, déployé sur Cloudflare Pages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
