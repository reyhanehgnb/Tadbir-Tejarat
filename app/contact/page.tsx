"use client";

import { useState } from "react";
import Header from "@/components/Header";   
import styles from "@/components/PageShell.module.css";

type AuthMode = "signup" | "signin";

export default function ContactPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null);

  const [authMode, setAuthMode] = useState<AuthMode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState<"idle" | "loading" | "error">("idle");

  const [subject, setSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [msgStatus, setMsgStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthStatus("loading");
    try {
      // TODO: no backend yet
      // if (authMode === "signup") {
      //   await fetch("/api/auth/signup", { method: "POST", body: JSON.stringify({ name, email, password }) });
      // } else {
      //   await fetch("/api/auth/signin", { method: "POST", body: JSON.stringify({ email, password }) });
      // }
      await new Promise((r) => setTimeout(r, 700));
      setCurrentUser({ name: name || email.split("@")[0] });
      setIsLoggedIn(true);
      setAuthStatus("idle");
    } catch {
      setAuthStatus("error");
    }
  }

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    setMsgStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setMsgStatus("success");
      setSubject("");
      setMessageBody("");
    } catch {
      setMsgStatus("error");
    }
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
              برای سفارش‌های سازمانی، همکاری تجاری یا هر پرسشی، تیم ما در
              کنار شماست.
            </p>

            <ul className={styles.quickContact}>
              <li>
                <PhoneIcon />
                <span>۰۲۸-۳۳۰۰۰۰۰</span>
              </li>
              <li>
                <MailIcon />
                <span>Tadbirtgm@gmail.com</span>
              </li>
              <li>
                <MapPinIcon />
                <span>قزوین ، ایران</span>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.infoPanel}>
            <p className={styles.eyebrow}>دفتر مرکزی</p>
            <h2 className={styles.panelTitle}>به ما سر بزنید</h2>
            <p className={styles.heroText}>
              دفتر ما در قلب قزوین پذیرای شماست. برای هماهنگی جلسه حضوری
              پیش از مراجعه با ما تماس بگیرید.
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
                <dt>پشتیبانی</dt>
                <dd>پاسخ به ایمیل در کمتر از ۲۴ ساعت</dd>
              </div>
            </dl>

            <OfficeMap />
          </div>

          <div className={styles.formPanel}>
            {!isLoggedIn ? (
              <>
                <p className={styles.eyebrow}>برای ارسال پیام</p>
                <h2 className={styles.panelTitle}>
                  {authMode === "signin" ? "ورود به حساب کاربری" : "ساخت حساب کاربری"}
                </h2>
                <p className={styles.heroText}>
                  برای تماس مستقیم با تیم ما، ابتدا وارد حساب خود شوید.
                </p>

                <div className={styles.authSwitch}>
                  <button
                    type="button"
                    onClick={() => setAuthMode("signin")}
                    className={authMode === "signin" ? styles.authTabActive : styles.authTab}
                  >
                    ورود
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode("signup")}
                    className={authMode === "signup" ? styles.authTabActive : styles.authTab}
                  >
                    ثبت‌نام
                  </button>
                </div>

                <form onSubmit={handleAuth} className={styles.form}>
                  {authMode === "signup" && (
                    <label className={styles.field}>
                      <span>نام</span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.input}
                      />
                    </label>
                  )}
                  <label className={styles.field}>
                    <span>ایمیل</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={styles.input}
                    />
                  </label>
                  <label className={styles.field}>
                    <span>رمز عبور</span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className={styles.input}
                    />
                  </label>

                  <button type="submit" disabled={authStatus === "loading"} className={styles.submitButton}>
                    {authStatus === "loading" ? "در حال بررسی..." : authMode === "signin" ? "ورود" : "ساخت حساب"}
                  </button>
                </form>

                {authStatus === "error" && (
                  <p className={styles.errorMsg}>مشکلی پیش آمد، دوباره تلاش کنید.</p>
                )}
              </>
            ) : (
              <>
                <p className={styles.eyebrow}>خوش آمدید، {currentUser?.name}</p>
                <h2 className={styles.panelTitle}>پیام خود را بنویسید</h2>
                <p className={styles.heroText}>پیام شما مستقیم به تیم پشتیبانی ما می‌رسد.</p>

                <form onSubmit={handleSendMessage} className={styles.form}>
                  <label className={styles.field}>
                    <span>موضوع</span>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className={styles.input}
                    />
                  </label>
                  <label className={styles.field}>
                    <span>پیام</span>
                    <textarea
                      value={messageBody}
                      onChange={(e) => setMessageBody(e.target.value)}
                      required
                      rows={5}
                      className={styles.textarea}
                    />
                  </label>

                  <button type="submit" disabled={msgStatus === "loading"} className={styles.submitButton}>
                    {msgStatus === "loading" ? "در حال ارسال..." : "ارسال پیام"}
                  </button>
                </form>

                {msgStatus === "success" && <p className={styles.successMsg}>پیام شما ارسال شد.</p>}
                {msgStatus === "error" && <p className={styles.errorMsg}>ارسال پیام ناموفق بود.</p>}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

function HeroPattern() {
  return (
    <svg className="heroPatternSvg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}