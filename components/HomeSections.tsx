import Link from "next/link";
import Image from "next/image";
import AboutGallery from "./AboutGallery";
import Reveal from "./Reveal";
import styles from "./HomeSections.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stats = [
  { value: "+۵", label: "سال تجربه تولید" },
  { value: "۱۰۰+", label: "مدل پمپ و اسپری" },
  { value: "۱۸–۸۹mm", label: "محدوده استاندارد گلویی" },
  { value: "۷۲ساعت", label: "زمان ارسال نمونه" },
];

const collections = [
  {
    src: `${basePath}/images/products/product-6.webp`,
    tone: "white",
    code: "WHITE-01",
    tag: "پمپ سفید",
    text: "روکش سفید مقاوم به خوردگی، برای خطوط تولید لوکس آرایشی.",
  },
  {
    src: `${basePath}/images/products/product-7.webp`,
    tone: "ink",
    code: "NOIR-02",
    tag: "پمپ مشکی",
    text: "بدنه‌ای مات و بادوام، پرکاربرد در صنایع بهداشتی و دارویی.",
  },
  {
    src: `${basePath}/images/products/product-8.webp`,
    tone: "crimson",
    code: "RUBY-03",
    tag: "پمپ زرشکی",
    text: "پوششی متمایز، برای برندهایی که روی قفسه دیده می‌شوند.",
  },
];

const aboutPoints = [
  "کنترل کیفیت روی صد درصد محصولات، پیش از بسته‌بندی",
  "سازگار با گلویی‌های استاندارد ۱۸ تا ۸۹ میلی‌متر",
  "امکان تولید رنگ سفارشی برای سفارش‌های عمده",
];

const aboutImages = [
  {
    src: `${basePath}/images/factory/factory-1.webp`,
    alt: "نمای دوگانه پمپ‌های برند شما",
  },
  {
    src: `${basePath}/images/factory/factory-2.webp`,
    alt: "پمپ اسپری طلایی برند شما",
  },
  {
    src: `${basePath}/images/factory/factory-3.webp`,
    alt: "جزئیات نازل پمپ",
  },
];

export function StoryStatement() {
  return (
    <Reveal>
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <p className={styles.storyText}>
            مجموعه‌ای از پمپ‌ها و اسپری‌ها برای کاربردهای آرایشی، بهداشتی و
            صنعتی، با تمرکز بر کیفیت و عملکرد قابل اعتماد.
          </p>
        </div>
      </section>
    </Reveal>
  );
}

export function StatsBand() {
  return (
    <Reveal distance="small">
      <section className={styles.stats} aria-label="اطلاعات کلیدی برند">
        {stats.map((item) => (
          <div key={item.label} className={styles.statItem}>
            <span className={styles.statValue}>{item.value}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </section>
    </Reveal>
  );
}

export function CollectionsShowcase() {
  return (
    <Reveal>
      <section className={styles.collections} id="collection">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>محصولات</p>

            <h2 className={styles.sectionTitle}>
              سه محصول، یک استاندارد
            </h2>
          </div>

          <p className={styles.sectionLead}>
            هر محصول، داستانی متفاوت
          </p>
        </div>

        <div className={styles.collZigzag}>
          {collections.map((item, index) => (
            <Reveal
              key={item.code}
              distance="small"
              delay={index * 90}
            >
              <article
                className={styles.collRow}
                data-tone={item.tone}
                data-flip={index % 2 === 1 ? "true" : undefined}
              >
                <div className={styles.collRowImg}>
                  <div className={styles.collRowImgWrap}>
                    <Image
                      src={item.src}
                      alt={item.tag}
                      fill
                      sizes="(max-width: 780px) 90vw, 45vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className={styles.collRowBody}>
                  <span className={styles.collRowCode}>
                    {item.code}
                  </span>

                  <h3 className={styles.collRowTag}>
                    {item.tag}
                  </h3>

                  <p className={styles.collRowText}>
                    {item.text}
                  </p>

                  <Link
                    className={styles.collRowLink}
                    href="/collection"
                  >
                    مشاهده →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          className={styles.outlineButton}
          href="/collection"
        >
          مشاهده همه محصولات
        </Link>
      </section>
    </Reveal>
  );
}

export function QuoteBand() {
  return (
    <Reveal distance="small">
      <section className={styles.quote}>
        {/* <div className={styles.quoteInner}>
          <p>
            کیفیت یک محصول از جزئیات آن شروع می‌شود.
          </p>
        </div> */}
      </section>
    </Reveal>
  );
}

export function AboutTeaser() {
  return (
    <Reveal>
      <section className={styles.about} id="about">
        <div className={styles.aboutImgOuter}>
          <div className={styles.aboutImgWrap}>
            <AboutGallery images={aboutImages} />
          </div>
        </div>

        <div className={styles.aboutTextWrap}>
          <p className={styles.eyebrow}>درباره ما</p>

          <h2 className={styles.aboutTitle}>
            تأمین‌کننده پمپ و اسپری صنعتی
          </h2>

          <p className={styles.text}>
            برند شما پمپ‌های اسپری با کیفیت را برای صنایع آرایشی، بهداشتی و
            دارویی تولید می‌کند؛ از سفارش کارخانه‌ای تا خرید خرد.
          </p>

          <ul className={styles.aboutList}>
            {aboutPoints.map((point) => (
              <li key={point} className={styles.aboutListItem}>
                {point}
              </li>
            ))}
          </ul>

          <Link className={styles.link} href="/about">
            بیشتر بدانید ←
          </Link>
        </div>
      </section>
    </Reveal>
  );
}

export function ContactCta() {
  return (
    <Reveal>
      <section className={styles.cta} id="contact">
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>همکاری با ما</p>

          <h2 className={styles.ctaTitle}>
            برای محصول بعدی‌تان، از همین‌جا شروع کنیم.
          </h2>

          <p className={styles.ctaText}>
            اگر برای محصول خود به پمپ یا اسپری مناسب نیاز دارید، مشخصات
            سفارش‌تان را با ما در میان بگذارید تا راهکار مناسب را بررسی کنیم.
          </p>

          <div className={styles.ctaActions}>
            <Link className={styles.ctaButton} href="/contact">
              شروع گفتگو
            </Link>

            <Link className={styles.ctaSecondary} href="/collection">
              دیدن محصولات
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

