import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingNav } from "@/components/layout/floating-nav";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavene Omondi — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer & Frontend Lead at Safaricom PLC. 5+ years architecting scalable IoT platforms, micro-frontends, and high-performance full-stack applications in Nairobi, Kenya.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Micro-frontend",
    "Safaricom",
    "Kenya",
    "Software Engineer",
  ],
  authors: [{ name: "Mavene Omondi", url: "https://my-portfolio-deploy-app.vercel.app" }],
  openGraph: {
    title: "Mavene Omondi — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer & Frontend Lead at Safaricom PLC — React, Next.js, TypeScript, Micro-frontends.",
    url: "https://my-portfolio-deploy-app.vercel.app",
    siteName: "Mavene Omondi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-black-100 antialiased flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <FloatingNav />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
