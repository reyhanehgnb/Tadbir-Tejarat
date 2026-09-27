import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "مجموعه محصولات",
  description: "مجموعه کامل عطرهای پمپی برند شما با انواع مکانیزم‌های پاشش."
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const products = [
  {
    src: `${basePath}/images/products/product-1.webp`,
    name: "پمپ اسپری تریگر",
    text: "پاششی قدرتمند و کنترل‌شده با یک فشار ساده.",
    details: [
      "مناسب برای رایحه‌های حجم‌دار و روزانه",
      "طراحی ارگونومیک برای فشار یکدست",
      "سازگار با اکثر بطری‌های استاندارد"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-1.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-6.webp`, label: "نمای نزدیک پمپ" },
      { src: `${basePath}/images/products/product-7.webp`, label: "درب و نازل" },
      { src: `${basePath}/images/products/product-8.webp`, label: "درب و نازل" }
    ]
  },
  {
    src: `${basePath}/images/products/product-2.webp`,
    name: "پمپ مه‌پاش",
    text: "پخش یکنواخت و ریز، برای پوشش کامل و رایحه‌ای ماندگار.",
    details: [
      "ذرات ریزتر برای پخش یکنواخت روی پوست",
      "مناسب رایحه‌های سبک و تابستانی",
      "کاهش مصرف عطر در هر پاشش"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-2.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-2-detail-1.webp`, label: "نازل مه‌پاش" }
    ]
  },
  {
    src: `${basePath}/images/products/product-3.webp`,
    name: "پمپ غلیظ‌پاش",
    text: "پاششی متمرکز و پرحجم، مناسب رایحه‌های سنگین.",
    details: [
      "مناسب رایحه‌های شرقی و چوبی",
      "پاشش متمرکز روی نقاط پالس",
      "ماندگاری بیشتر رایحه روی پوست و لباس"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-3.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-3-detail-1.webp`, label: "نمای نزدیک" }
    ]
  },
  {
    src: `${basePath}/images/products/product-4.webp`,
    name: "پمپ رقیق‌پاش",
    text: "پاششی سبک و ظریف، برای استفاده روزانه و ملایم.",
    details: [
      "مناسب استفاده مکرر در طول روز",
      "رایحه ملایم، بدون تحمیل زیاد به فضا",
      "پیشنهادی برای محیط‌های کاری و بسته"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-4.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-4-detail-1.webp`, label: "نمای نزدیک" }
    ]
  },
  {
    src: `${basePath}/images/products/product-5.webp`,
    name: "پمپ قفل‌دار",
    text: "طراحی ایمن با قفل ضدنشتی، مناسب برای سفر.",
    details: [
      "قفل ایمنی در برابر فشار ناخواسته در چمدان",
      "مناسب برای سفرهای هوایی و جاده‌ای",
      "بدنه مقاوم در برابر نشتی"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-5.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-5-detail-1.webp`, label: "مکانیزم قفل" }
    ]
  }
];

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className={styles.collectionPage}>
        <div className={styles.collectionBanner}>
          <p className={styles.eyebrowLight}>مجموعه محصولات</p>
          <h1 className={styles.collectionTitle}>همه عطرهای پمپی ما</h1>
          <p className={styles.collectionSub}>
            هر مکانیزم پاشش، تجربه‌ای متفاوت از رایحه را برای شما می‌سازد.
          </p>
        </div>

        <ProductGrid products={products} />
      </main>
    </>
  );
}