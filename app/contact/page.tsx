import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباط با برند شما برای سفارش و پشتیبانی."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.banner}>
          <p className={styles.eyebrow}>تماس با ما</p>
          <h1 className={styles.title}>در ارتباط باشید</h1>
          <p className={styles.text}>تیم ما آماده پاسخ‌گویی به سوالات و سفارش‌های شماست.</p>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <p className={styles.contactLabel}>تلفن</p>
            <p className={styles.contactValue}>۰۲۱-۰۰۰۰۰۰۰</p>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.contactLabel}>ایمیل</p>
            <p className={styles.contactValue}>info@yourbrand.com</p>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.contactLabel}>آدرس</p>
            <p className={styles.contactValue}>تهران، ایران</p>
          </div>
        </div>
      </main>
    </>
  );
}
