import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";

export const metadata: Metadata = {
  title: "مجموعه محصولات",
  description: "مجموعه کامل عطرهای پمپی برند شما در شیشه‌های طلایی، مشکی و زرشکی."
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const products = [
  { src: `${basePath}/images/products/product-1.webp`, name: "مجموعه طلایی", text: "رایحه‌ای گرم با پایه‌ای از عنبر و وانیل." },
  { src: `${basePath}/images/products/product-2.webp`, name: "مجموعه مشکی", text: "رایحه‌ای چوبی و تیره برای لحظه‌های ماندگار." },
  { src: `${basePath}/images/products/product-3.webp`, name: "مجموعه زرشکی", text: "ترکیبی از میوه‌های سرخ و ادویه." },
  { src: `${basePath}/images/products/product-4.webp`, name: "مجموعه دوگانه", text: "طلایی و مشکی در کنار هم." },
  { src: `${basePath}/images/products/product-5.webp`, name: "جزئیات دست‌ساز", text: "دقتی که در هر پاشش حس می‌شود." }
];

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.banner}>
          <p className={styles.eyebrow}>مجموعه محصولات</p>
          <h1 className={styles.title}>همه عطرهای پمپی ما</h1>
        </div>
        <div className={styles.grid}>
          {products.map((item) => (
            <div key={item.src} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={item.src} alt={item.name} fill sizes="(max-width: 780px) 90vw, 30vw" style={{ objectFit: "cover" }} />
              </div>
              <p className={styles.cardName}>{item.name}</p>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
