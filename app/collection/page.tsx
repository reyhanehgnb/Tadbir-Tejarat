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
        <section className={styles.collectionHero}>
          <div className={styles.heroInner}>
            <span className={styles.heroIndex}>TTGM / COLLECTION 01</span>

            <p className={styles.eyebrowLight}>مجموعه محصولات تدبیر تجارت</p>

            <h1 className={styles.collectionTitle}>
              جزئیات کوچک،
              <br />
              <span>تجربه‌ای متفاوت.</span>
            </h1>

            <div className={styles.heroBottom}>
              <p className={styles.collectionSub}>
                مجموعه‌ای از راهکارهای بسته‌بندی و مکانیزم‌های پاشش؛ برای
                انتخابی متناسب با محصول، کاربرد و هویت برند شما.
              </p>

              <a href="#product-catalog" className={styles.heroLink}>
                مشاهده محصولات
                <span aria-hidden="true">↙</span>
              </a>
            </div>

            <span className={styles.heroWatermark} aria-hidden="true">
              TTGM
            </span>
          </div>
        </section>

        <section id="product-catalog" className={styles.catalogSection}>
          <div className={styles.catalogHeading}>
            <div>
              <p className={styles.eyebrow}>01 — کاتالوگ محصولات</p>
              <h2 className={styles.catalogTitle}>
                مکانیزم مناسب خود را پیدا کنید
              </h2>
            </div>

            <p className={styles.catalogDescription}>
              برای مشاهده تصاویر بیشتر و آشنایی با ویژگی‌های هر محصول، روی
              تصویر یا کارت آن کلیک کنید.
            </p>
          </div>

          <div className={styles.catalogMeta}>
            <span>PRODUCT COLLECTION</span>
            <span>{String(products.length).padStart(2, "0")} MODELS</span>
          </div>

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
