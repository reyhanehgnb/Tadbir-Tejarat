"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { label: "خانه", href: "/" },
  {
    label: "محصولات",
    href: "/collection",
    children: [
      { label: "اسپری پمپی", href: "/collection#pump-spray" },
      { label: "پمپ لوسیون", href: "/collection#lotion-pump" },
      { label: "درپوش و بطری", href: "/collection#caps-bottles" },
    ],
  },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const [hover, setHover] = useState(false);
  const [fixed, setFixed] = useState(false);
  const open = hover || fixed;

  return (
    <header
      className={styles.header}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(fixed)}
    >
      <div className={styles.barLayer} data-open={open}>
        <span className={styles.logo}>تدبیر تجارت</span>
        <button
          className={styles.toggle}
          aria-label="منو"
          aria-expanded={open}
          onClick={() => setFixed(!fixed)}
        >
          <i className={styles.toggleLine} />
          <i className={styles.toggleLine} />
          <i className={styles.toggleLine} />
        </button>
      </div>

      <nav className={styles.navLayer} data-open={open}>
        <div className={styles.navInner}>
          <ul className={styles.navList}>
            {navItems.map(({ label, href, children }) => (
              <li key={href} className={styles.navItem}>
                <Link className={styles.navLink} href={href}>
                  {label}
                </Link>
                {children && (
                  <ul className={styles.subList}>
                    {children.map((s) => (
                      <li key={s.href}>
                        <Link className={styles.subLink} href={s.href}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button
            className={styles.close}
            aria-label="بستن منو"
            onClick={() => {
              setFixed(false);
              setHover(false);
            }}
          >
            ×
          </button>
        </div>
      </nav>
    </header>
  );
}