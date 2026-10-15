"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const MARKER_COLOR = "#f00034";

const INFO_ROWS = [
  ["آدرس", "قزوین ، خیابان طالقانی ، برج خلیج فارس"],
  ["ساعات کاری", "شنبه تا پنج‌شنبه، ۸:۰۰ تا ۱۷:۰۰"],
  ["شماره تماس", "۰۲۸-۳۳۰۰۰۰۰"],
  ["ایمیل", "Tadbirtgm@gmail.com"],
  ["پشتیبانی", "پاسخ به ایمیل در کمتر از ۲۴ ساعت"],
];

const PANELS = [
  {
    eyebrow: "دفتر مرکزی",
    title: "به ما سر بزنید",
    text: "دفتر ما در قلب قزوین پذیرای شماست. برای هماهنگی جلسه حضوری پیش از مراجعه با ما تماس بگیرید.",
    map: "نقشه دفتر مرکزی",
    lat: 36.2691723,
    lon: 50.005753,
  },
  {
    eyebrow: "کارخانه ما",
    title: "در جریان مراحل تولید باشید",
    text: "کیفیت را از نزدیک ببینید؛ برای بازدید از خط تولید و سفارش‌های عمده، تیم ما منتظر حضور شماست.",
    map: "نقشه کارخانه",
    lat: 36.2688,
    lon: 50.0041,
  },
];

function OfficeMap({ lat, lon, title }: { lat: number; lon: number; title: string }) {
  const [open, setOpen] = useState(false);
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !el.current) return;
    let map: any;
    let off = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (off || !el.current) return;

      map = L.map(el.current, { zoomControl: false, scrollWheelZoom: false }).setView([lat, lon], 13);
      L.control.zoom({ position: "bottomleft" }).addTo(map);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        html: `<span class="${styles.pulse}"></span><svg width="34" height="34" viewBox="0 0 24 24" fill="${MARKER_COLOR}" stroke="#fff" stroke-width="1"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>`,
      });
      L.marker([lat, lon], { icon, title }).addTo(map);

      map.flyTo([lat, lon], 17, { duration: 2.2 }); 
    })();

    return () => {
      off = true;
      map?.remove();
    };
  }, [open, lat, lon, title]);

  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapBox}>
        {open ? (
          <div ref={el} className={styles.mapFrame} aria-label={title} />
        ) : (
          <button type="button" className={styles.mapPlaceholder} onClick={() => setOpen(true)}>
            نمایش نقشه
          </button>
        )}
        <span className={styles.mapCard}>{title}</span>
      </div>
      <a
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        مشاهده مسیر و موقعیت روی نقشه
      </a>
    </div>
  );
}

export default function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF({ ...f, [k]: e.target.value });

  function send(e: React.FormEvent) {
    e.preventDefault();
    const body = `نام: ${f.name}\nایمیل: ${f.email}\n\n${f.message}`;
    window.location.href = `mailto:Tadbirtgm@gmail.com?subject=${encodeURIComponent(
      f.subject || "پیام از وب‌سایت",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <section
          className={styles.hero}
          style={{ backgroundImage: `url(${basePath}/images/backgrounds/bg-1.webp)` }}
        >
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>تماس با ما</p>
            <h1 className={styles.heroTitle}>گفت‌وگو را با ما شروع کنید</h1>
            <p className={styles.heroText}>
              برای سفارش‌های سازمانی، همکاری تجاری یا هر پرسشی، تیم ما در کنار شماست.
            </p>
          </div>
        </section>

        <section className={styles.contactSection}>
          {PANELS.map((p) => (
            <div key={p.eyebrow} className={styles.infoPanel}>
              <p className={styles.eyebrow}>{p.eyebrow}</p>
              <h2 className={styles.panelTitle}>{p.title}</h2>
              <p className={styles.heroText}>{p.text}</p>
              <dl className={styles.infoList}>
                {INFO_ROWS.map(([label, value]) => (
                  <div key={label} className={styles.infoRow}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <OfficeMap lat={p.lat} lon={p.lon} title={p.map} />
            </div>
          ))}
        </section>

        <section className={styles.formSection}>
          <div className={styles.formInner}>
            <p className={styles.eyebrow}>پیام مستقیم</p>
            <h2 className={styles.panelTitle}>برای ما بنویسید</h2>
            <p className={styles.heroText}>
              تیم ما آماده برقراری ارتباط و پاسخگویی در کوتاه ترین زمان ممکن با شما است.
            </p>

            <form className={styles.contactForm} onSubmit={send}>
              <div className={styles.formRow}>
                <input
                  className={styles.formInput}
                  placeholder="نام شما"
                  value={f.name}
                  onChange={set("name")}
                  required
                />
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="ایمیل شما"
                  value={f.email}
                  onChange={set("email")}
                  required
                />
              </div>
              <input
                className={styles.formInput}
                placeholder="موضوع"
                value={f.subject}
                onChange={set("subject")}
              />
              <textarea
                className={styles.formTextarea}
                placeholder="متن پیام شما"
                value={f.message}
                onChange={set("message")}
                rows={5}
                required
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