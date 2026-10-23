
import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "مجموعه محصولات | تدبیر تجارت",
  description:
    "مجموعه‌ای از پمپ‌های اسپری و مکانیزم‌های پاشش برای بسته‌بندی محصولات آرایشی، بهداشتی و صنعتی."
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const products = [
  {
    src: `${basePath}/images/products/product-1.webp`,
    name: "پمپ اسپری تریگر",
    text: "کنترل بیشتر، عملکرد دقیق‌تر و طراحی کاربردی برای مصارف متنوع.",
    details: [
      "مناسب برای محصولات شوینده و پاک‌کننده",
      "طراحی ارگونومیک برای استفاده آسان",
      "قابل انتخاب در مدل‌ها و ابعاد مختلف"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-1.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-6.webp`, label: "نمای نزدیک پمپ" },
      { src: `${basePath}/images/products/product-7.webp`, label: "درب و نازل" },
      { src: `${basePath}/images/products/product-8.webp`, label: "جزئیات طراحی" }
    ]
  },
  {
    src: `${basePath}/images/products/product-2.webp`,
    name: "پمپ مه‌پاش",
    text: "پاشش ریز و یکنواخت برای محصولاتی که به توزیع ظریف نیاز دارند.",
    details: [
      "مناسب برای محصولات آرایشی و بهداشتی",
      "ایجاد پاشش ظریف و یکنواخت",
      "قابل استفاده در بسته‌بندی‌های متنوع"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-2.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-2-detail-1.webp`, label: "جزئیات نازل" }
    ]
  },
  {
    src: `${basePath}/images/products/product-3.webp`,
    name: "پمپ غلیظ‌پاش",
    text: "مکانیزمی برای توزیع کنترل‌شده‌تر محصولات با فرمولاسیون غلیظ‌تر.",
    details: [
      "مناسب برای فرمولاسیون‌های سازگار با این مکانیزم",
      "امکان انتخاب متناسب با نوع محصول",
      "قابل بررسی در اندازه‌ها و طراحی‌های مختلف"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-3.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-3-detail-1.webp`, label: "نمای نزدیک" }
    ]
  },
  {
    src: `${basePath}/images/products/product-4.webp`,
    name: "پمپ رقیق‌پاش",
    text: "راهکاری ساده برای توزیع کنترل‌شده مایعات با ویسکوزیته پایین.",
    details: [
      "مناسب برای مایعات سازگار با مکانیزم",
      "طراحی متناسب با بسته‌بندی محصول",
      "قابل انتخاب بر اساس میزان خروجی موردنیاز"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-4.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-4-detail-1.webp`, label: "نمای نزدیک" }
    ]
  },
  {
    src: `${basePath}/images/products/product-5.webp`,
    name: "پمپ قفل‌دار",
    text: "طراحی کاربردی با قابلیت قفل برای حمل‌ونقل و نگهداری آسان‌تر.",
    details: [
      "کاهش احتمال فشرده‌شدن ناخواسته",
      "مناسب برای بسته‌بندی‌های قابل حمل",
      "انتخاب قفل متناسب با طراحی پمپ"
    ],
    subsets: [
      { src: `${basePath}/images/products/product-5.webp`, label: "نمای کامل" },
      { src: `${basePath}/images/products/product-5-detail-1.webp`, label: "جزئیات قفل" }
    ]
  }
];

export default function CollectionPage() {
  return (
    <>
      <Header />

      <main className={styles.collectionPage}>
        <section className={styles.collectionHero}>
          <div className={styles.heroInner}>
            <span className={styles.heroIndex}>TTGM / COLLECTION 01</span>

            <p className={styles.eyebrowLight}>
              مجموعه محصولات تدبیر تجارت
            </p>

            <h1 className={styles.collectionTitle}>
              جزئیات کوچک،
              <br />
              <span>تجربه‌ای متفاوت.</span>
            </h1>

            <div className={styles.heroBottom}>
              <p className={styles.collectionSub}>
                مجموعه‌ای از راهکارهای بسته‌بندی و مکانیزم‌های پاشش؛
                برای انتخابی متناسب با محصول، کاربرد و هویت برند شما.
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

        <section
          id="product-catalog"
          className={styles.catalogSection}
        >
          <div className={styles.catalogHeading}>
            <div>
              <p className={styles.eyebrow}>01 — کاتالوگ محصولات</p>
              <h2 className={styles.catalogTitle}>
                مکانیزم مناسب خود را پیدا کنید
              </h2>
            </div>

            <p className={styles.catalogDescription}>
              برای مشاهده تصاویر بیشتر و آشنایی با ویژگی‌های هر محصول،
              روی تصویر یا کارت آن کلیک کنید.
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
          <a href="/contact" className={styles.footerLink}>
            برای مشاوره با ما در ارتباط باشید <span>↗</span>
          </a>
        </section>
      </main>
    </>
  );
}
