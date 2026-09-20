import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fa",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourbrand.com"),
  title: {
    default: "برند شما | عطرهای پمپی لوکس",
    template: "%s | برند شما"
  },
  description:
    "برند شما عطرهای پمپی را با ظرافت در شیشه‌های طلایی، مشکی و زرشکی می‌آفریند.",
  keywords: ["اسپری پمپی", "عطر", "پرفیوم", "عطر لوکس"],
  openGraph: {
    title: "برند شما | عطرهای پمپی لوکس",
    description: "عطرهای پمپی با ظرافت، در شیشه‌های طلایی، مشکی و زرشکی.",
    url: "https://www.yourbrand.com",
    siteName: "برند شما",
    images: ["/images/products/product-1.jpg"],
    locale: "fa_IR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>{children}</body>
    </html>
  );
}
