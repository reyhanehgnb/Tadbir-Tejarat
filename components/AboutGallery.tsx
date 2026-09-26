"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AboutGallery.module.css";

export default function AboutGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={styles.wrap}>
      {images.map((img, i) => (
        <div key={img.src} className={styles.frame} data-active={i === index}>
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 780px) 90vw, 40vw" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}
