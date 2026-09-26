import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "آشنایی با برند شما، داستان شکل‌گیری و فلسفه ساخت عطرهای پمپی."
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.banner}>
          <p className={styles.eyebrow}>درباره ما</p>
          <h1 className={styles.title}>روایتی که از یک قطره شروع شد</h1>
          <p className={styles.text}>
            برند شما از دل عشق به عطر و ظرافت شکل گرفت. هر شیشه، ترکیبی از
            رایحه‌های اصیل و طراحی مدرن است که با دقت و توسط استادکاران ما
            پر و پرداخت می‌شود. هدف ما ساختن لحظاتی است که با یک پاشش، به
            یاد می‌مانند.
          </p>
        </div>
      </main>
    </>
  );
}
