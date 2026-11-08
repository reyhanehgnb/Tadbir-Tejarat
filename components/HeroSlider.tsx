"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (n: number) => `${basePath}/images/products/product-${n}.webp`;

const slides = [
  {
    src: img(1),
    alt: "مجموعه اصلی",
    eyebrow: "",
    headline: "جریانی بی‌نقص،برای تجربه‌ای ماندگار",
    sub: "تجربه‌ای از نظم و تداوم در هر بار به‌کارگیری",
  },
  {
    src: img(2),
    alt: "پمپ مه پاش",
    eyebrow: "پمپ مه پاش",
    headline: "سکوتی پر از حضور",
    sub: "جاری شدن نظم و دقت در قالب حرکت‌هایی ظریف و بی‌صدا",
  },
  {
    src: img(3),
    alt: "پمپ غلیظ پاش",
    eyebrow: "پمپ غلیظ پاش",
    headline: "هر قطره،ارزشمند است",
    sub: "سیستم خروج ضد گرفتگی، مخصوص محصولات سنگین",
  },
  {
    src: img(4),
    alt: "پمپ اسپری تریگر",
    eyebrow: "پمپ اسپری تریگر",
    headline: "لمس یکنواختی",
    sub: "پاششی گسترده و یکنواخت برای پوشش حداکثری",
  },
  {
    src: img(5),
    alt: "پمپ رقیق پاش",
    eyebrow: "پمپ رقیق پاش",
    headline: "تجربه‌ای فراتر از پاشش",
    sub: "سیستم خروج ضد گرفتگی، مخصوص محصولات سنگین",
  },
];

const AUTOPLAY_DELAY = 5500;
const N = slides.length;
const wrap = (i: number) => (i + N) % N;

const arrows = [
  { cls: styles.arrowStart, label: "محصول قبلی", char: "‹", step: -1 },
  { cls: styles.arrowEnd, label: "محصول بعدی", char: "›", step: 1 },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  // slides whose image is allowed to load (current + next one)
  const [seen, setSeen] = useState<number[]>([0]);

  useEffect(() => {
    setSeen((s) => [...new Set([...s, active, wrap(active + 1)])]);
    const t = setTimeout(() => setActive(wrap(active + 1)), AUTOPLAY_DELAY);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section className={styles.hero} aria-label="محصولات ویژه">
      {slides.map((s, i) => (
        <div key={s.src} className={styles.slide} data-active={i === active}>
          {seen.includes(i) && (
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              className={styles.slideImg}
              priority={i === 0}
            />
          )}
          <div className={styles.scrim} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>{s.eyebrow}</p>
            <h1 className={styles.headline}>{s.headline}</h1>
            <p className={styles.sub}>{s.sub}</p>
            <a className={styles.cta} href="#collection">
              دانلود کاتالوگ
            </a>
          </div>
        </div>
      ))}

      {arrows.map((a) => (
        <button
          key={a.label}
          className={`${styles.arrow} ${a.cls}`}
          aria-label={a.label}
          onClick={() => setActive(wrap(active + a.step))}
        >
          {a.char}
        </button>
      ))}

      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.src}
            className={styles.dot}
            data-active={i === active}
            aria-label={`رفتن به اسلاید ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}