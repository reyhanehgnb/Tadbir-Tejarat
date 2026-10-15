"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AboutGallery.module.css";

export default function AboutGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  // images allowed to load: current + next one
  const [seen, setSeen] = useState<number[]>([0]);

  useEffect(() => {
    setSeen((s) => [...new Set([...s, index, (index + 1) % images.length])]);
    const timer = setTimeout(() => setIndex((prev) => (prev + 1) % images.length), 3800);
    return () => clearTimeout(timer);
  }, [index, images.length]);

  return (
    <div className={styles.wrap}>
      {images.map((img, i) => (
        <div key={img.src} className={styles.frame} data-active={i === index}>
          {seen.includes(i) && (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 780px) 90vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}