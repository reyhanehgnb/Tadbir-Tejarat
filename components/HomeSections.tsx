"use client";
import Link from "next/link";
import { useState } from "react";
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
    tag: "پرفروش‌ترین پمپ اسپری",
    text: "پمپ اسپری سفید با پاشش یکنواخت و مه ریز؛ انتخاب اول تولیدکنندگان عطر و محصولات آرایشی.",
  },
  {
    src: `${basePath}/images/products/product-7.webp`,
    tone: "ink",
    code: "NOIR-02",
    tag: "محبوب مشتریان",
    text: "پمپ اسپری مشکی مات با دوام بالا؛ پرسفارش‌ترین مدل برای محصولات بهداشتی و دارویی.",
  },
  {
    src: `${basePath}/images/products/product-8.webp`,
    tone: "crimson",
    code: "RUBY-03",
    tag: "جدید در مجموعه",
    text: "مدل جدید پمپ اسپری زرشکی با ظاهری متمایز؛ ویژه برندهایی که می‌خواهند روی قفسه دیده شوند.",
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
const socialLinks = [
  {
    name: "اینستاگرام",
    href: "https://instagram.com/your-page",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "تلگرام",
    href: "https://t.me/your-page",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M21 4.5 3 11.5l6 2.2m12-9.2-3.6 16-6.4-4.8m10-11.2-10 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "واتساپ",
    href: "https://wa.me/989xxxxxxxxx",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.3-.1-.5-.15-.7.15-.2.3-.8.95-1 1.15-.2.2-.35.2-.65.05-.3-.15-1.3-.5-2.5-1.55-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.45.15-.6.15-.15.3-.35.45-.5.15-.15.2-.3.3-.5.1-.2.05-.35 0-.5-.05-.15-.7-1.65-.95-2.25-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.5.05-.75.35-.25.3-1 1-1 2.4 0 1.4 1 2.75 1.15 2.95.15.2 2 3.1 4.9 4.3.7.3 1.2.45 1.65.6.7.2 1.3.2 1.8.1.55-.1 1.7-.7 1.95-1.35.25-.65.25-1.2.15-1.35-.1-.15-.3-.2-.6-.35Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9.5" />
      </svg>
    ),
  },
  {
    name: "لینکدین",
    href: "https://linkedin.com/company/your-page",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path
          d="M7.5 10.5v6M7.5 7.8v.01M12 16.5v-3.7c0-1.3.9-2.3 2.2-2.3 1.2 0 1.8.9 1.8 2.3v3.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const trustBadges = [
  { label: "ضمانت اصالت کالا" },
  { label: "پشتیبانی فنی" },
  { label: "دارای پروانه بهداشت" },
  { label: "ارسال به سراسر کشور" },
];

export function StoryStatement() {
  return (
    <Reveal>
      <section className={styles.story}>
        <p className={styles.storyText}>
          مجموعه‌ای از پمپ‌ها و اسپری‌ها برای کاربردهای آرایشی، بهداشتی و صنعتی،
          با تمرکز بر کیفیت و عملکرد قابل اعتماد.
        </p>
        <div className={styles.stats}>
          {stats.map((item, i) => (
            <div key={item.label} className={styles.statItem} data-i={i}>
              <span className={styles.statValue}>{item.value}</span>
              <span className={styles.statLabel}>{item.label}</span>
            </div>
          ))}
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

            <h2 className={styles.sectionTitle}>برگزیده‌های تدبیر</h2>
          </div>

          <p className={styles.sectionLead}>پر فروش های این هفته تدبیر تجارت</p>
        </div>

        <div className={styles.collZigzag}>
          {collections.map((item, index) => (
            <Reveal key={item.code} distance="small" delay={index * 90}>
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
                  <span className={styles.collRowCode}>{item.code}</span>

                  <h3 className={styles.collRowTag}>{item.tag}</h3>

                  <p className={styles.collRowText}>{item.text}</p>

                  <Link className={styles.collRowLink} href="/collection">
                    مشاهده →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link className={styles.outlineButton} href="/collection">
          <span>مشاهده همه محصولات</span>
          <svg
            className={styles.arrow}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
      </section>
    </Reveal>
  );
}
<Link className={styles.outlineButton} href="/collection">
  <span>مشاهده همه محصولات</span>
  <svg
    className={styles.arrow}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
</Link>;

export function QuoteBand() {
  return (
    <Reveal distance="small">
      <section className={styles.quote}></section>
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

          <h2 className={styles.aboutTitle}>تأمین‌کننده پمپ و اسپری صنعتی</h2>

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

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.trustStrip}>
        {trustBadges.map((b) => (
          <div key={b.label} className={styles.trustItem}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M9 12.5 11.2 15 16 9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="9.5" />
            </svg>
            <span>{b.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.footerInner}>
        <div className={styles.footerBrandCol}>
          <p className={styles.footerLogo}>تدبیر تجارت گستر مانا</p>
          <p className={styles.footerTagline}>
            تدبیر تجارت گستر مانا با سال‌ها تجربه در طراحی و تولید پمپ و
            اسپری‌های تخصصی، شریک مطمئن برندهای آرایشی، بهداشتی و دارویی است.
            تمرکز ما بر کیفیت پایدار، دوام بالا و ارائه راهکارهای سفارشی متناسب
            با نیاز خط تولید شماست.
          </p>
          <div className={styles.footerSocials}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={styles.socialIcon}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerColTitle}>دسترسی</p>
           <Link href="/">خانه</Link>
          <Link href="/collection">محصولات</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerColTitle}>خدمات</p>
          <Link href="/warranty">گارانتی و بازگشت کالا</Link>
          <Link href="/privacy">حریم خصوصی</Link>
          <Link href="/faq">سوالات متداول</Link>
          <Link href="/shipping">شرایط ارسال و حمل</Link>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerColTitle}>تماس با ما</p>
          <p className={styles.footerContactItem}>
            قزوین ، خیابان طالقانی ، برج خلیج فارس
          </p>
          <a
            className={styles.footerContactItem}
            href="tel:+982100000000"
            dir="ltr"
          >
            ۰۲۸-۳۳۰۰۰۰۰
          </a>
          <a
            className={styles.footerContactItem}
            href="mailto:info@yourbrand.com"
          >
            Tadbirtgm@gmail.com
          </a>
           <a className={styles.footerContactHours}>
           شنبه تا پنج‌شنبه، ۸:۰۰ تا ۱۷:۰۰
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} تدبیر تجارت گستر مانا تمامی حقوق محفوظ
          است.
        </p>
        <button
          type="button"
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          بازگشت به بالا
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 19V5M6 11l6-6 6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
