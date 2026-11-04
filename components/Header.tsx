"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const navItems = [
  { label: "خانه", href: "/" },
  {
    label: "محصولات",
    href: "#",
    children: [
      {
        label: "پمپ",
        href: "#",
        children: [
          { label: "پمپ کرم", href: "/collection/pump-cream" },
          { label: "پمپ تریگر", href: "/collection/pump-trigger" },
          { label: "پمپ اسپری", href: "/collection/pump-spray" },
          { label: "پمپ نازل دار", href: "/collection/pump-nozzle" },
          { label: "پمپ فوم‌ساز", href: "/collection/pump-foam" },
          { label: "پمپ لیدوکائین", href: "/collection/pump-lidocaine" },
          { label: "پمپ‌ غلیظ پاش", href: "/collection/pump-thick" },
          { label: "پمپ عمود پاش", href: "/collection/pump-vertical" },
          { label: "پمپ اسپری بینی", href: "/collection/pump-nasal" },
          { label: "پمپ اسپری تحت فشار", href: "/collection/pump-pressure" },
        ],
      },
      {
        label: "درب",
        href: "#",
        children: [
          { label: "قطره چکان", href: "/collection/cap-dropper" },
          { label: "درب پلاستیکی", href: "/collection/cap-plastic" },
          { label: "درب آلومینیومی", href: "/collection/cap-aluminum" },
        ],
      },
      {
        label: "بطری",
        href: "#",
        children: [
          { label: "بطری‌ ایرلس", href: "/collection/bottle-airless" },
          { label: "بطری پلیمری", href: "/collection/bottle-polymer" },
          { label: "بطری‌ شیشه ای", href: "/collection/bottle-glass" },
        ],
      },
      {
        label: "سایر ملزومات",
        href: "#",
        children: [
          { label: "مینی بگ آرایشی", href: "/collection/mini-bag-cosmetic" },
          { label: "مینی بگ مسافرتی", href: "/collection/mini-bag-travel" },
        ],
      },
    ],
  },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];
export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openChild, setOpenChild] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      setOpenItem(null);
      setOpenChild(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open && !openItem) return;
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setOpenItem(null);
        setOpenChild(null);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open, openItem]);

  const showBackground = open && scrolled;

  return (
    <header
      ref={headerRef}
      className={styles.header}
      data-scrolled={showBackground}
    >
      <div className={styles.bar}>
        <div className={styles.brandArea}>
          <button
            className={styles.toggle}
            aria-label="منو"
            aria-expanded={open}
            data-open={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={styles.toggleLine} />
            <i className={styles.toggleLine} />
            <i className={styles.toggleLine} />
          </button>

          <nav className={styles.nav} data-open={open}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link
                    className={styles.navLink}
                    href={item.href}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={
                      item.children ? openItem === item.label : undefined
                    }
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        setOpenItem((prev) =>
                          prev === item.label ? null : item.label,
                        );
                        setOpenChild(null);
                      }
                    }}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <ul
                      className={styles.subList}
                      data-open={openItem === item.label}
                    >
                      {item.children.map((child) => (
                        <li key={child.label} className={styles.navItem}>
                          <Link
                            className={styles.subLink}
                            href={child.href}
                            aria-haspopup={child.children ? "true" : undefined}
                            aria-expanded={
                              child.children
                                ? openChild === child.label
                                : undefined
                            }
                            onClick={(e) => {
                              if (child.children) {
                                e.preventDefault();
                                setOpenChild((prev) =>
                                  prev === child.label ? null : child.label,
                                );
                              }
                            }}
                          >
                            {child.label}
                          </Link>

                          {child.children && (
                            <ul
                              className={styles.nestedSubList}
                              data-open={openChild === child.label}
                            >
                              {child.children.map((subChild) => (
                                <li
                                  key={subChild.label}
                                  className={styles.navItem}
                                >
                                  <Link
                                    className={styles.nestedSubLink}
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
          </nav>
        </div>
        <div className={styles.logoBadge}>
          <Link href="/" aria-label="صفحه اصلی">
            <Image
              src={`${basePath}/images/logo/Logo.webp`}
              alt="Tadbir Tejarat Mana Gostareh"
              width={160}
              height={80}
              className={styles.logo}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}