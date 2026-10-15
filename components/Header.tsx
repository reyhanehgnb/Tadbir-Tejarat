"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const navItems = [
  { label: "خانه", href: "/" },
  {
    label: "محصولات",
    href: "/collection",
    children: [
      {
        label: "بطری ها",
        href: "/collection#lotion-pump",
        children: [
          {
            label: "بطری های آرایشی و بهداشتی",
            href: "/collection#lotion-pump",
          },
          { label: " بطری های دارویی", href: "/collection#pump-spray" },
        ],
      },
      { label: " پمپ اسپری ها", href: "/collection#pump-spray" },
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
          <Image
            src={`${basePath}/images/logo/Logo.webp`}
            alt="Tadbir Tejarat Mana Gostareh"
            width={160}
            height={80}
            className={styles.logo}
          />
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
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link className={styles.navLink} href={item.href}>
                  {item.label}
                </Link>

                {item.children && (
                  <ul className={styles.subList}>
                    {item.children.map((child) => (
                      <li key={child.href} className={styles.navItem}>
                        <Link className={styles.subLink} href={child.href}>
                          {child.label}
                        </Link>

                        {child.children && (
                          <ul className={styles.nestedSubList}>
                            {child.children.map((subChild) => (
                              <li
                                key={subChild.href}
                                className={styles.navItem}
                              >
                                <Link
                                  className={styles.subLink}
                                  href={subChild.href}
                                >
                                  {subChild.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
