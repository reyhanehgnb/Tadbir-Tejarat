"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/about" },
  { label: "مجموعه", href: "/collection" },
  { label: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);
  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.barLayer} data-open={isOpen}>
        <span className={styles.logo}>تدبیر تجارت</span>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="باز کردن منو"
          onClick={() => setIsOpen(true)}
        >
          <span className={styles.toggleLine} />
          <span className={styles.toggleLine} />
          <span className={styles.toggleLine} />
        </button>
      </div>

      <nav
        id="primary-navigation"
        className={styles.navLayer}
        data-open={isOpen}
      >
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.close}
          aria-label="بستن منو"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </nav>
    </header>
  );
}
