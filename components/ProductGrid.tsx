"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/components/PageShell.module.css";

type Subset = { src: string; label?: string };

type Product = {
  src: string;
  name: string;
  text: string;
  details: string[];
  subsets: Subset[];
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Product | null>(null);
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const close = () => setActive(null);
  const markFailed = (src: string) =>
    setFailed((list) => (list.includes(src) ? list : [...list, src]));
  const isOk = (src: string) => !failed.includes(src);
  const current = active && (active.subsets[idx] ?? { src: active.src });
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <div className={styles.productGrid}>
        {products.map((item, index) => (
          <button
            key={`${item.name}-${index}`}
            type="button"
            className={styles.productCard}
            onClick={() => {
              setActive(item);
              setIdx(0);
            }}
            aria-label={`مشاهده جزئیات ${item.name}`}
          >
            <div className={styles.imgFrame}>
              <span className={styles.cornerTL} aria-hidden="true" />
              <span className={styles.cornerBR} aria-hidden="true" />

              <div className={styles.imgWrap}>
                {isOk(item.src) && (
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 520px) 45vw, (max-width: 900px) 45vw, 28vw"
                    style={{ objectFit: "fill" }}
                    onError={() => markFailed(item.src)}
                  />
                )}
              </div>
            </div>
            <p className={styles.productName}>{item.name}</p>
            <span className={styles.cardDivider} aria-hidden="true" />
            <p className={styles.productText}>{item.text}</p>
          </button>
        ))}
      </div>
      {active && current && (
        <div
          className={styles.modalBackdrop}
          onClick={close}
          role="presentation"
        >
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={close}
              aria-label="بستن"
            >
              ×
            </button>
            <div className={styles.modalImageCol}>
              <div className={styles.modalImageFrame}>
                <span className={styles.cornerTL} aria-hidden="true" />
                <span className={styles.cornerBR} aria-hidden="true" />
                <div className={styles.modalImageWrap}>
                  {isOk(current.src) && (
                    <Image
                      src={current.src}
                      alt={("label" in current && current.label) || active.name}
                      fill
                      sizes="(max-width: 600px) 90vw, 420px"
                      style={{ objectFit: "fill" }}
                      onError={() => markFailed(current.src)}
                    />
                  )}
                </div>
              </div>
              {active.subsets.length > 1 && (
                <div className={styles.thumbRow}>
                  {active.subsets.map((s, i) => {
                    if (!isOk(s.src)) return null;
                    const name = s.label ?? `${active.name} ${i + 1}`;
                    return (
                      <button
                        key={`${s.src}-${i}`}
                        type="button"
                        className={
                          i === idx ? styles.thumbActive : styles.thumb
                        }
                        onClick={() => setIdx(i)}
                        aria-label={name}
                        aria-pressed={i === idx}
                      >
                        <Image
                          src={s.src}
                          alt={name}
                          fill
                          sizes="64px"
                          style={{ objectFit: "contain" }}
                          onError={() => markFailed(s.src)}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={styles.modalText}>
              <h2 className={styles.modalTitle}>{active.name}</h2>
              <p className={styles.modalDesc}>{active.text}</p>
              <ul className={styles.modalDetails}>
                {active.details.map((detail, i) => (
                  <li key={`${detail}-${i}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}