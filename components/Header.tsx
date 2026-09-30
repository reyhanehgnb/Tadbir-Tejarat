"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
const navItems = [
  { label: "خانه", href: "/" },
   { label: "محصولات", href: "/collection" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const isOpen = isHovered || isFixed;
  return (
    <header
      className={styles.header}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isFixed) {
          setIsHovered(false);
        }
      }}
    >
      {" "}
      <div className={styles.barLayer} data-open={isOpen}>
        {" "}
        <span className={styles.logo}>تدبیر تجارت</span>{" "}
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isFixed ? "باز کردن منو به حالت عادی" : "ثابت کردن منو"}
          onClick={() => setIsFixed((prev) => !prev)}
        >
          {" "}
          <span className={styles.toggleLine} />{" "}
          <span className={styles.toggleLine} />{" "}
          <span className={styles.toggleLine} />{" "}
        </button>{" "}
      </div>{" "}
      <nav
        id="primary-navigation"
        className={styles.navLayer}
        data-open={isOpen}
      >
        {" "}
        <ul className={styles.navList}>
          {" "}
          {navItems.map((item) => (
            <li key={item.href}>
              {" "}
              <Link className={styles.navLink} href={item.href}>
                {" "}
                {item.label}{" "}
              </Link>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
        <button
          type="button"
          className={styles.close}
          aria-label="بستن منو"
          onClick={() => {
            setIsFixed(false);
            setIsHovered(false);
          }}
        >
          {" "}
          ×{" "}
        </button>{" "}
      </nav>{" "}
    </header>
  );
}
