"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    const mq = window.matchMedia("(max-width: 780px)");
    function update() {
      setIsMobile(mq.matches);
    }
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!open) {
      setOpenItem(null);
      setOpenChild(null);
    }
  }, [open]);

  const showBackground = open && scrolled;

  return (
    <header className={styles.header} data-scrolled={showBackground}>
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
                    onClick={(e) => {
                      if (isMobile && item.children) {
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
                            onClick={(e) => {
                              if (isMobile && child.children) {
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