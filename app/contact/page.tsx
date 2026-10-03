"use client";

import { useState } from "react";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    const body = `نام: ${senderName}\nایمیل: ${senderEmail}\n\n${messageBody}`;
    const mailtoUrl = `mailto:Tadbirtgm@gmail.com?subject=${encodeURIComponent(
      subject || "پیام از وب‌سایت"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <section className={styles.hero}>
          <HeroPattern />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>تماس با ما</p>
            <h1 className={styles.heroTitle}>گفت‌وگو را با ما شروع کنید</h1>
            <p className={styles.heroText}>
              برای سفارش‌های سازمانی، همکاری تجاری یا هر پرسشی، تیم ما در کنار
              شماست.
            </p>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.infoPanel}>
            <p className={styles.eyebrow}>دفتر مرکزی</p>
            <h2 className={styles.panelTitle}>به ما سر بزنید</h2>
            <p className={styles.heroText}>
              دفتر ما در قلب قزوین پذیرای شماست. برای هماهنگی جلسه حضوری پیش از
              مراجعه با ما تماس بگیرید.
            </p>

            <dl className={styles.infoList}>
              <div className={styles.infoRow}>
                <dt>آدرس</dt>
                <dd>قزوین ، خیابان طالقانی ، برج خلیج فارس</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>ساعات کاری</dt>
                <dd>شنبه تا پنج‌شنبه، ۸:۰۰ تا ۱۷:۰۰</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>شماره تماس</dt>
                <dd>۰۲۸-۳۳۰۰۰۰۰</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>ایمیل</dt>
                <dd>Tadbirtgm@gmail.com</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>پشتیبانی</dt>
                <dd>پاسخ به ایمیل در کمتر از ۲۴ ساعت</dd>
              </div>
            </dl>

            <OfficeMap />
          </div>
          <div className={styles.infoPanel}>
            <p className={styles.eyebrow}>کارخانه ما</p>
            <h2 className={styles.panelTitle}>در جریان مراحل تولید باشید</h2>
            <p className={styles.heroText}>
              کیفیت را از نزدیک ببینید؛ برای بازدید از خط تولید و سفارش‌های
              عمده، تیم ما منتظر حضور شماست.
            </p>

            <dl className={styles.infoList}>
              <div className={styles.infoRow}>
                <dt>آدرس</dt>
                <dd>قزوین ، خیابان طالقانی ، برج خلیج فارس</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>ساعات کاری</dt>
                <dd>شنبه تا پنج‌شنبه، ۸:۰۰ تا ۱۷:۰۰</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>شماره تماس</dt>
                <dd>۰۲۸-۳۳۰۰۰۰۰</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>ایمیل</dt>
                <dd>Tadbirtgm@gmail.com</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>پشتیبانی</dt>
                <dd>پاسخ به ایمیل در کمتر از ۲۴ ساعت</dd>
              </div>
            </dl>

            <OfficeMap />
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formInner}>
            <p className={styles.eyebrow}>پیام مستقیم</p>
            <h2 className={styles.panelTitle}>برای ما بنویسید</h2>
            <p className={styles.heroText}>
              تیم ما آماده برقراری ارتباط و پاسخگویی در کوتاه ترین زمان ممکن با شما است.
            </p>

            <form className={styles.contactForm} onSubmit={handleSendMessage}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  placeholder="نام شما"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  required
                  className={styles.formInput}
                />
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  required
                  className={styles.formInput}
                />
              </div>

              <input
                type="text"
                placeholder="موضوع"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={styles.formInput}
              />

              <textarea
                placeholder="متن پیام شما"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                required
                rows={5}
                className={styles.formTextarea}
              />

              <button type="submit" className={styles.formSubmit}>
                ارسال پیام
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

function HeroPattern() {
  return (
    <svg
      className="heroPatternSvg"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="goldGlow" cx="80%" cy="20%" r="60%">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#goldGlow)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M ${-100 + i * 220} 500 C ${150 + i * 220} 250, ${250 + i * 220} 250, ${500 + i * 220} 0`}
          stroke="var(--color-gold)"
          strokeOpacity="0.12"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}

function OfficeMap() {
  const plusCode = "7297+4F7 Qazvin, Qazvin Province, Iran";
  return (
    <div className={styles.mapWrap}>
      <iframe
        className={styles.mapFrame}
        src={`https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&z=12&output=embed`}
        title="نقشه دفتر مرکزی"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}