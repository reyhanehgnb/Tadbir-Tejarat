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
        label: "بطری ها",
        href: "#",
        children: [
          { label: "بطری‌های اسپری و عطری", href: "/collection/bottle-spray" },
          {
            label: "بطری‌های گرد و استوانه‌ای",
            href: "/collection/bottle-round",
          },
          {
            label: "بطری‌های شوینده و صنعتی",
            href: "/collection/bottle-detergent",
          },
          {
            label: "بطری‌های آرایشی و بهداشتی",
            href: "/collection/bottle-cosmetic",
          },
          {
            label: "بطری‌های دارویی و تخصصی",
            href: "/collection/bottle-pharma",
          },
          {
            label: "بطری‌های چهارگوش و خاص",
            href: "/collection/bottle-square",
          },
        ],
      },
      {
        label: "پمپ اسپری ها",
        href: "#",
        children: [
          { label: "قطره چکان", href: "/collection/pump-airless" },
          { label: "پمپ‌های فشاری", href: "/collection/pump-push" },
          { label: "پمپ‌های دیسپنسر", href: "/collection/pump-dispenser" },
          { label: "اسپری‌های تخصصی", href: "/collection/spray-specialty" },
          {
            label: "پمپ اسپری ظریف و عطری",
            href: "/collection/pump-fine-mist",
          },
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
          <div className={styles.logoBadge}>
            <Image
              src={`${basePath}/images/logo/Logo.webp`}
              alt="Tadbir Tejarat Mana Gostareh"
              width={160}
              height={80}
              className={styles.logo}
            />
          </div>

          <nav className={styles.nav} data-open={open}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    className={styles.navLink}
                    href={item.href}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={
                      item.children ? openItem === item.href : undefined
                    }
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        setOpenItem((prev) =>
                          prev === item.href ? null : item.href,
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
                      data-open={openItem === item.href}
                    >
                      {item.children.map((child) => (
                        <li key={child.href} className={styles.navItem}>
                          <Link
                            className={styles.subLink}
                            href={child.href}
                            aria-haspopup={child.children ? "true" : undefined}
                            aria-expanded={
                              child.children
                                ? openChild === child.href
                                : undefined
                            }
                            onClick={(e) => {
                              if (child.children) {
                                e.preventDefault();
                                setOpenChild((prev) =>
                                  prev === child.href ? null : child.href,
                                );
                              }
                            }}
                          >
                            {child.label}
                          </Link>

                          {child.children && (
                            <ul
                              className={styles.nestedSubList}
                              data-open={openChild === child.href}
                            >
                              {child.children.map((subChild) => (
                                <li
                                  key={subChild.href}
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
      </div>
    </header>
  );
}
