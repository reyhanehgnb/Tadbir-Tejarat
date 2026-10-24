import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";
import ProductGrid from "@/components/ProductGrid";
import { categories, getCategory } from "@/data/categories";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | تدبیر تجارت`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <Header />

      <main className={styles.collectionPage}>
        <section className={styles.collectionHero}>
          <div className={styles.heroInner}>
            <span className={styles.heroIndex}>
              TTGM / {category.slug.toUpperCase()}
            </span>

            <p className={styles.eyebrowLight}>مجموعه محصولات تدبیر تجارت</p>

            <h1 className={styles.collectionTitle}>
              {category.title}
              <br />
              <span>{category.tagline}</span>
            </h1>

            <div className={styles.heroBottom}>
              <p className={styles.collectionSub}>{category.description}</p>

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
            <span>
              {String(category.products.length).padStart(2, "0")} MODELS
            </span>
          </div>

          {category.products.length > 0 ? (
            <ProductGrid products={category.products} />
          ) : (
            <p className={styles.catalogDescription}>
              محصولات این دسته به‌زودی اضافه می‌شود.
            </p>
          )}
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
