"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/components/PageShell.module.css";

type Subset = { src: string; label: string };
type Product = {
  src: string;
  name: string;
  text: string;
  details: string[];
  subsets: Subset[];
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<Subset | null>(null);

  function openProduct(item: Product) {
    setActive(item);
    setActiveImage(item.subsets[0] ?? { src: item.src, label: item.name });
  }

  function closeProduct() {
    setActive(null);
    setActiveImage(null);
  }

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeProduct();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className={styles.productGrid}>
        {products.map((item) => (
          <button
            key={item.src}
            type="button"
            className={styles.productCard}
            onClick={() => openProduct(item)}
          >
            <div className={styles.imgFrame}>
              <span className={styles.cornerTL} aria-hidden="true" />
              <span className={styles.cornerBR} aria-hidden="true" />
              <div className={styles.imgWrap}>
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 780px) 45vw, 220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className={styles.productName}>{item.name}</p>
            <span className={styles.cardDivider} aria-hidden="true" />
            <p className={styles.productText}>{item.text}</p>
          </button>
        ))}
      </div>

      {active && activeImage && (
        <div className={styles.modalBackdrop} onClick={closeProduct} role="presentation">
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.modalClose} onClick={closeProduct} aria-label="بستن">
              ×
            </button>

            <div className={styles.modalImageCol}>
              <div className={styles.modalImageFrame}>
                <span className={styles.cornerTL} aria-hidden="true" />
                <span className={styles.cornerBR} aria-hidden="true" />
                <div className={styles.modalImageWrap}>
                  <Image
                    src={activeImage.src}
                    alt={activeImage.label}
                    fill
                    sizes="(max-width: 780px) 90vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {active.subsets.length > 1 && (
                <div className={styles.thumbRow}>
                  {active.subsets.map((s) => (
                    <button
                      key={s.src}
                      type="button"
                      className={
                        s.src === activeImage.src ? styles.thumbActive : styles.thumb
                      }
                      onClick={() => setActiveImage(s)}
                      aria-label={s.label}
                    >
                      <Image src={s.src} alt={s.label} fill sizes="60px" style={{ objectFit: "cover" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.modalText}>
              <h2 className={styles.modalTitle}>{active.name}</h2>
              <p className={styles.modalDesc}>{active.text}</p>
              <ul className={styles.modalDetails}>
                {active.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}