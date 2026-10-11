"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = "medium",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: "small" | "medium";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.14, rootMargin: "0px 0px -50px" },
    );
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[distance]} ${visible ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
