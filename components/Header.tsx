"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Item = { label: string; href: string; children?: Item[] };

const navItems: Item[] = [
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

const linkCls = [styles.navLink, styles.subLink, styles.nestedSubLink];
const listCls = [styles.subList, styles.nestedSubList];

function Items({
  items,
  depth,
  path,
  toggle,
}: {
  items: Item[];
  depth: number;
  path: string[];
  toggle: (depth: number, label: string) => void;
}) {
  return (
    <>
      {items.map((item) => {
        const isOpen = path[depth] === item.label;
        return (
          <li key={item.label} className={styles.navItem}>
            <Link
              className={linkCls[depth]}
              href={item.href}
              aria-haspopup={item.children ? "true" : undefined}
              aria-expanded={item.children ? isOpen : undefined}
              onClick={(e) => {
                if (item.children) {
                  e.preventDefault();
                  toggle(depth, item.label);
                }
              }}
            >
              {item.label}
            </Link>
            {item.children && (
              <ul className={listCls[depth]} data-open={isOpen}>
                <Items
                  items={item.children}
                  depth={depth + 1}
                  path={path}
                  toggle={toggle}
                />
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState<string[]>([]);

  const closeAll = () => {
    setOpen(false);
    setPath([]);
  };
  const toggle = (depth: number, label: string) =>
    setPath((p) =>
      p[depth] === label ? p.slice(0, depth) : [...p.slice(0, depth), label],
    );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open && !path.length) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) closeAll();
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open, path]);

  return (
    <header
      ref={headerRef}
      className={styles.header}
      data-scrolled={open && scrolled}
    >
      <div className={styles.bar}>
        <div className={styles.brandArea}>
          <button
            className={styles.toggle}
            aria-label="منو"
            aria-expanded={open}
            data-open={open}
            onClick={() => (open ? closeAll() : setOpen(true))}
          >
            <i className={styles.toggleLine} />
            <i className={styles.toggleLine} />
            <i className={styles.toggleLine} />
          </button>

          <nav className={styles.nav} data-open={open}>
            <ul className={styles.navList}>
              <Items items={navItems} depth={0} path={path} toggle={toggle} />
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