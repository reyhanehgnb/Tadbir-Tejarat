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
        <div className={styles.pageBar}>
          <h1 className={styles.pageTitle}>{category.title}</h1>
          <p className={styles.pageNote}>{category.tagline}</p>
          <span className={styles.pageCount}>
            {String(category.products.length).padStart(2, "0")} MODELS
          </span>
        </div>

        <section id="product-catalog" className={styles.catalogSection}>
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