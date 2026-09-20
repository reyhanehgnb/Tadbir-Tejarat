"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    src: "/images/products/product-1.webp",
    alt: "مجموعه اصلی",
    eyebrow: "",
    headline: "جریانی بی‌نقص،برای تجربه‌ای ماندگار",
    sub: "تجربه‌ای از نظم و تداوم در هر بار به‌کارگیری"
  },  
  {
    src: "/images/products/product-2.webp",
    alt: "پمپ مه پاش",
    eyebrow: "پمپ مه پاش",
    headline: "سکوتی پر از حضور",
    sub: "جاری شدن نظم و دقت در قالب حرکت‌هایی ظریف و بی‌صدا"
  },
  {
    src: "/images/products/product-3.webp",
    alt: "پمپ غلیظ پاش",
    eyebrow: "پمپ غلیظ پاش",
    headline: "هر قطره،ارزشمند است",
    sub: "سیستم خروج ضد گرفتگی، مخصوص محصولات سنگین"
  },
  {
    src: "/images/products/product-4.webp",
    alt: "پمپ اسپری تریگر",
    eyebrow: "پمپ اسپری تریگر",
    headline: "لمس یکنواختی",
    sub: "پاششی گسترده و یکنواخت برای پوشش حداکثری"
  },
  {
    src: "/images/products/product-5.webp",
    alt: "پمپ رقیق پاش",
    eyebrow: "پمپ رقیق پاش",
    headline: "تجربه‌ای فراتر از پاشش",
    sub: "سیستم خروج ضد گرفتگی، مخصوص محصولات سنگین"
  }
];

const AUTOPLAY_DELAY = 5500;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);
  }, []);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
    startTimer();
  };

  return (
    <section className={styles.hero} aria-label="محصولات ویژه">
      {slides.map((slide, index) => (
        <div key={slide.src} className={styles.slide} data-active={index === activeIndex}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div className={styles.scrim} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>{slide.eyebrow}</p>
            <h1 className={styles.headline}>{slide.headline}</h1>
            <p className={styles.sub}>{slide.sub}</p>
            <a className={styles.cta} href="#collection">
              دانلود کاتالوگ
            </a>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowStart}`}
        aria-label="محصول قبلی"
        onClick={() => goTo(activeIndex - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowEnd}`}
        aria-label="محصول بعدی"
        onClick={() => goTo(activeIndex + 1)}
      >
        ›
      </button>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={styles.dot}
            data-active={index === activeIndex}
            aria-label={`رفتن به اسلاید ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
