import type { Metadata } from "next";
import Header from "@/components/Header";
import styles from "@/components/PageShell.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata: Metadata = {
  title: "درباره ما | تدبیر تجارت گستر مانا",
  description:
    "آشنایی با تدبیر تجارت گستر مانا، فعال در زمینه تولید و تأمین پمپ و اسپری برای صنایع آرایشی، بهداشتی و دارویی.",
};

const milestones = [
  {
    n: "01",
    title: "شروع فعالیت",
    text: "تدبیر تجارت گستر مانا با تمرکز بر تولید پمپ‌های اسپری پایه کار خود را آغاز کرد.",
  },
  {
    n: "02",
    title: "گسترش خط تولید",
    text: "با افزایش تقاضا، خط تولید به انواع تریگر، پمپ لوسیون و پمپ کف گسترش یافت.",
  },
  {
    n: "03",
    title: "ورود به صنایع تخصصی",
    text: "همکاری با برندهای آرایشی، بهداشتی و دارویی برای تأمین قطعات اختصاصی آغاز شد.",
  },
  {
    n: "04",
    title: "امروز",
    text: "تمرکز ما بر تنوع محصولات، کنترل کیفیت و پاسخ‌گویی به نیازهای مشتریان است.",
  },
];

const values = [
  {
    number: "01",
    title: "دقت در تولید",
    subtitle: "PRECISION",
    text: "توجه به جزئیات، کیفیت قطعات و بررسی محصول در فرایند آماده‌سازی سفارش.",
  },
  {
    number: "02",
    title: "تنوع در انتخاب",
    subtitle: "VERSATILITY",
    text: "ارائه مدل‌های متنوع پمپ و اسپری متناسب با نیازهای گوناگون صنایع.",
  },
  {
    number: "03",
    title: "همراهی در همکاری",
    subtitle: "PARTNERSHIP",
    text: "تلاش برای شناخت نیاز مشتریان و ارائه راهکار مناسب برای هر سفارش.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.aboutHero}>
          <div className={styles.aboutHeroContent}>
            <div className={styles.aboutEyebrow}>
              <span />
              درباره تدبیر تجارت گستر مانا
            </div>

            <h1 className={styles.aboutHeroTitle}>
              فراتر از یک قطعه،
              <br />
              <span>بخشی از کیفیت محصول.</span>
            </h1>

            <p className={styles.aboutHeroText}>
              ما در تدبیر تجارت گستر مانا، در زمینه تولید و تأمین پمپ و اسپری
              فعالیت می‌کنیم؛ با نگاهی تخصصی به نیاز صنایع آرایشی، بهداشتی و
              دارویی و تمرکز بر کیفیت، تنوع و همکاری پایدار.
            </p>

            <a href="#our-story" className={styles.aboutHeroLink}>
              با مسیر ما آشنا شوید
              <span>↓</span>
            </a>
          </div>

          <div className={styles.aboutHeroVisual}>
            <div className={styles.aboutVisualGrid} />

            <div className={styles.aboutVisualLabel}>
              <span>TTGM</span>
              <span>PACKAGING COMPONENTS</span>
            </div>

            <div className={styles.aboutVisualCenter}>
              <span className={styles.aboutVisualRing} />
              <span className={styles.aboutVisualRingInner} />

              <div className={styles.aboutVisualMonogram}>
                <span>T</span>
                <span>T</span>
                <span>G</span>
                <span>M</span>
              </div>

              <span className={styles.aboutVisualOrbit} />
            </div>

            <div className={styles.aboutVisualNote}>
              <span>01 / OUR IDENTITY</span>
              <span>تولید · تأمین · همکاری</span>
            </div>

            <span className={styles.aboutVisualIndex}>MANA</span>
          </div>

          <div className={styles.aboutHeroBottom}>
            <span>01</span>
            <span />
            <span>ABOUT OUR COMPANY</span>
          </div>
        </section>

        <section className={styles.aboutIntro}>
          <div className={styles.aboutIntroLabel}>
            <span className={styles.aboutSectionKicker}>WHO WE ARE</span>
            <span className={styles.aboutIntroLine} />
          </div>

          <div className={styles.aboutIntroMain}>
            <h2 className={styles.aboutSectionTitle}>
              پشت هر انتخاب درست،
              <br />
              <span>شناختی دقیق قرار دارد.</span>
            </h2>

            <div className={styles.aboutIntroDetails}>
              <p>
                در صنعت بسته‌بندی، هر جزء نقشی مهم در تجربه نهایی محصول دارد.
                پمپ و اسپری فقط یک قطعه نیستند؛ بخشی از عملکرد، کاربرد و کیفیت
                محصول نهایی‌اند.
              </p>

              <p>
                رویکرد ما در تدبیر تجارت گستر مانا، شناخت این نیازها و تلاش برای
                فراهم‌کردن انتخاب‌هایی متناسب با کاربردهای مختلف است؛ از تنوع
                محصولات تا همراهی در مسیر انتخاب و تأمین.
              </p>
            </div>
          </div>

          <div className={styles.aboutIntroSignature}>
            <span className={styles.aboutSignatureMark}>M.</span>
            <div>
              <strong>تدبیر تجارت گستر مانا</strong>
              <span>نگاهی دقیق به جزئیات صنعت</span>
            </div>
          </div>
        </section>

        <section
          className={styles.aboutStory}
          id="our-story"
        >
          <div className={styles.aboutStoryHeader}>
            <div>
              <span className={styles.aboutSectionKicker}>
                OUR JOURNEY
              </span>

              <h2 className={styles.aboutSectionTitle}>
                مسیری که
                <br />
                <span>ادامه دارد.</span>
              </h2>
            </div>

            <p>
              از آغاز فعالیت تا امروز، توسعه محصولات و شناخت نیازهای بازار
              بخش مهمی از مسیر ما بوده است.
            </p>
          </div>

          <div className={styles.aboutTimeline}>
            {milestones.map((item) => (
              <article
                className={styles.aboutTimelineItem}
                key={item.n}
              >
                <div className={styles.aboutTimelineNumber}>
                  {item.n}
                </div>

                <div className={styles.aboutTimelineBody}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <span className={styles.aboutTimelineMark}>
                  ↙
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutValues}>
          <div className={styles.aboutValuesHeader}>
            <span className={styles.aboutSectionKicker}>
              OUR PRINCIPLES
            </span>

            <h2 className={styles.aboutSectionTitle}>
              آنچه برای ما
              <br />
              <span>اهمیت دارد.</span>
            </h2>

            <p>
              همکاری حرفه‌ای با توجه به کیفیت، تنوع و نیاز واقعی مشتری شکل
              می‌گیرد.
            </p>
          </div>

          <div className={styles.aboutValuesList}>
            {values.map((item) => (
              <article
                className={styles.aboutValueItem}
                key={item.number}
              >
                <span className={styles.aboutValueNumber}>
                  {item.number}
                </span>

                <div className={styles.aboutValueContent}>
                  <span className={styles.aboutValueSubtitle}>
                    {item.subtitle}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <span className={styles.aboutValueArrow}>
                  ↙
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutCta}>
          <div className={styles.aboutCtaDecoration} />

          <div className={styles.aboutCtaContent}>
            <span className={styles.aboutSectionKicker}>
              LET'S CONNECT
            </span>

            <h2>
              یک همکاری خوب،
              <br />
              <span>از یک گفت‌وگو شروع می‌شود.</span>
            </h2>

            <p>
              برای آشنایی بیشتر با محصولات و بررسی نیازهای مجموعه خود، با ما
              در ارتباط باشید.
            </p>

            <a href={`${basePath}/contact`} className={styles.aboutCtaButton}>
              ارتباط با ما
              <span>↙</span>
            </a>
          </div>

          <div className={styles.aboutCtaSide}>
            <span>TTGM</span>
            <span />
            <p>THOUGHTFUL SOLUTIONS. BETTER PARTNERSHIPS.</p>
          </div>
        </section>
      </main>
    </>
  );
}
