import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";
import ProductGrid from "@/components/ProductGrid";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "مجموعه محصولات | تدبیر تجارت",
  description:
    "مجموعه‌ای از پمپ‌های اسپری و مکانیزم‌های پاشش برای بسته‌بندی محصولات آرایشی، بهداشتی و صنعتی.",
};

const products = categories.flatMap((c) => c.products);

export default function CollectionPage() {
  return (
    <>
      <Header />

      <main className={styles.collectionPage}>
        <div className={styles.pageBar}>
          <h1 className={styles.pageTitle}>مجموعه محصولات</h1>
          <p className={styles.pageNote}>
            برای دیدن تصاویر و جزئیات هر محصول، روی آن کلیک کنید.
          </p>
          <span className={styles.pageCount}>
            {String(products.length).padStart(2, "0")} MODELS
          </span>
        </div>

        <section id="product-catalog" className={styles.catalogSection}>
          <ProductGrid products={products} />
        </section>

        <section className={styles.collectionFooter}>
          <span className={styles.footerMark}>TTGM</span>
          <p>
            بسته‌بندی مناسب، بخشی از تجربه‌ای است که برای محصول خود می‌سازید.
          </p>
          <Link href="/contact" className={styles.footerLink}>
            برای مشاوره با ما در ارتباط باشید <span>↗</span>
          </Link>
        </section>
      </main>
    </>
  );
}
