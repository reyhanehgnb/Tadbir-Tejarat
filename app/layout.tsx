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
    default: "تدبیر تجارت",
    template: "%s | برند شما"
  },
  description:
    "برند شما تولیدکننده پمپ‌های اسپری با کیفیت در رنگ‌های طلایی، مشکی و زرشکی برای صنایع آرایشی و بهداشتی.",
  keywords: ["پمپ اسپری", "تولید پمپ", "بسته‌بندی صنعتی", "پمپ لوسیون"],
  openGraph: {
    title: "برند شما | تولیدکننده پمپ اسپری",
    description: "پمپ‌های اسپری با کیفیت، در رنگ‌های طلایی، مشکی و زرشکی.",
    url: "https://www.yourbrand.com",
    siteName: "برند شما",
    images: ["/images/products/product-1.webp"],
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
