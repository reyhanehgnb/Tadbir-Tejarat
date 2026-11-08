import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";
import ProductGrid from "@/components/ProductGrid";
import { categories, getCategory } from "@/data/categories";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () =>
  categories.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  return category
    ? { title: `${category.title} | تدبیر تجارت`, description: category.description }
    : {};
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  const { title, tagline, products } = category;

  return (
    <>
      <Header />

      <main className={styles.collectionPage}>
        <div className={styles.pageBar}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <p className={styles.pageNote}>{tagline}</p>
          <span className={styles.pageCount}>
            {String(products.length).padStart(2, "0")} MODELS
          </span>
        </div>

        <section id="product-catalog" className={styles.catalogSection}>
          {products.length > 0 ? (
            <ProductGrid products={products} />
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