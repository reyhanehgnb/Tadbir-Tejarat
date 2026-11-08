const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (name: string) => `${basePath}/images/products/${name}.webp`;

export type Product = {
  src: string;
  name: string;
  text: string;
  details: string[];
  subsets: { src: string }[];
};

export type Category = {
  slug: string;
  parent: string | null;
  title: string;
  tagline: string;
  description: string;
  products: Product[];
};

export const categories: Category[] = [
  /* ---------- main group ---------- */
  {
    slug: "pump",
    parent: null,
    title: "پمپ",
    tagline: "هر خروجی، یک پمپ مناسب.",
    description:
      "انواع پمپ‌های کرم، تریگر، اسپری، فوم‌ساز و تخصصی برای بسته‌بندی محصولات آرایشی، بهداشتی و صنعتی.",
    products: [],
  },
  {
    slug: "cap",
    parent: null,
    title: "درب",
    tagline: "پایان درست برای هر بسته‌بندی.",
    description:
      "درب‌های قطره‌چکان، پلاستیکی و آلومینیومی سازگار با انواع بطری‌ها.",
    products: [],
  },
  {
    slug: "bottle",
    parent: null,
    title: "بطری",
    tagline: "شکلی ماندگار برای هر محصول.",
    description:
      "بطری‌های مناسب بسته‌بندی محصولات آرایشی، بهداشتی و عطری، سازگار با پمپ‌های اسپری.",
    products: [],
  },
  {
    slug: "accessories",
    parent: null,
    title: "سایر ملزومات",
    tagline: "مکمل بسته‌بندی شما.",
    description:
      "ملزومات جانبی بسته‌بندی و مصرف، از مینی‌بگ‌ها تا وسایل کاربردی.",
    products: [],
  },

  /* ---------- pump ---------- */
  {
    slug: "pump-cream",
    parent: null,
    title: "پمپ کرم",
    tagline: "مناسب برای محصولات غلیظ، با خروجی پهن و کنترل‌شده و طراحی مقاوم",
    description:
      "طراحی‌شده برای بسته‌بندی و توزیع کنترل‌شده کرم‌ها و محصولات غلیظ، با عملکرد روان و خروجی دقیق",
    products: [
      {
        src: img("cream-pump-1"),
        name: "پمپ کرم استاندارد",
        text: "طراحی ساده و کاربردی، با عملکرد روان و خروجی یکنواخت برای استفاده روزمره",
        details: [
          "طراحی استاندارد و خوش‌دست",
          "خروجی یکنواخت در هر بار فشار",
          "قابلیت قفل برای جلوگیری از نشت محتویات",
        ],
        subsets: [
          { src: img("cream-detail-1") },
          { src: img("cream-detail-2") },
          { src: img("cream-detail-3") },
          { src: img("cream-detail-4") },
          { src: img("cream-detail-5") },
        ],
      },
      {
        src: img("cream-pump-2"),
        name: "پمپ کرم قفل دار",
        text: "دارای مکانیزم قفل برای جلوگیری از خروج ناخواسته مواد و حفظ ایمنی محصول هنگام حمل‌ونقل",
        details: [
          "مجهز به مکانیزم قفل ایمن",
          "جلوگیری از خروج ناخواسته مواد",
          "مناسب برای حمل‌ونقل و نگهداری آسان",
        ],
        subsets: [
          { src: img("cream-detail-6") },
          { src: img("cream-detail-7") },
          { src: img("cream-detail-8") },
          { src: img("cream-detail-9") },
          { src: img("cream-detail-10") },
        ],
      },
      {
        src: img("cream-pump-3"),
        name: "پمپ کرم با خروجی پهن",
        text: "مناسب برای توزیع آسان کرم‌ها و محصولات غلیظ با خروجی پهن و یکنواخت",
        details: [
          "عملکرد روان و بدون فشار اضافی",
          "خروجی پهن برای تخلیه آسان‌تر کرم",
          "توزیع یکنواخت و کنترل‌شده مواد غلیظ",
        ],
        subsets: [
          { src: img("cream-detail-11") },
          { src: img("cream-detail-12") },
          { src: img("cream-detail-13") },
          { src: img("cream-detail-14") },
          { src: img("cream-detail-15") },
        ],
      },
      {
        src: img("cream-pump-4"),
        name: "پمپ با نازل بلند",
        text: "راهکاری ساده برای توزیع کنترل‌شده مایعات با ویسکوزیته پایین.",
        details: [
          "مناسب برای مایعات سازگار با مکانیزم",
          "طراحی متناسب با بسته‌بندی محصول",
          "قابل انتخاب بر اساس میزان خروجی موردنیاز",
        ],
        subsets: [
          { src: img("cream-detail-16") },
          { src: img("cream-detail-17") },
          { src: img("cream-detail-18") },
          { src: img("cream-detail-19") },
          { src: img("cream-detail-20") },
        ],
      },
    ],
  },
  {
    slug: "pump-trigger",
    parent: "pump",
    title: "پمپ تریگر",
    tagline: "پاشش قوی برای مصارف روزمره",
    description:
      "پمپ‌های تریگر برای شوینده‌ها، پاک‌کننده‌ها و محلول‌هایی که به پاشش مستقیم و کنترل‌شده نیاز دارند.",
    products: [
      {
        src: img("trigger-pump-1"),
        name: "پمپ تریگر استاندارد",
        text: "پاشش قوی و یکنواخت برای شوینده‌ها و پاک‌کننده‌های خانگی",
        details: [
          "اهرم راحت و خوش‌دست",
          "پاشش یکنواخت در هر بار فشار",
          "مناسب مایعات شوینده و پاک‌کننده",
        ],
        subsets: [
          { src: img("trigger-detail-1") },
          { src: img("trigger-detail-2") },
          { src: img("trigger-detail-3") },
          { src: img("trigger-detail-4") },
          { src: img("trigger-detail-5") },
        ],
      },
      {
        src: img("trigger-pump-2"),
        name: "پمپ مینی تریگر",
        text: "طراحی کوچک و جمع‌وجور، با عملکرد اسپری یکنواخت و مناسب بسته‌بندی‌های کم‌حجم",
        details: [
          "وزن سبک و ابعاد کوچک",
          "مکانیزم فشاری نرم و روان",
          "نازل قابل تنظیم در برخی مدل‌ها",
        ],
        subsets: [
          { src: img("trigger-detail-6") },
          { src: img("trigger-detail-7") },
          { src: img("trigger-detail-8") },
          { src: img("trigger-detail-9") },
          { src: img("trigger-detail-10") },
        ],
      },
      {
        src: img("trigger-pump-3"),
        name: "پمپ تریگر قفل‌دار",
        text: "دارای قفل ایمنی برای جلوگیری از نشت و فشار ناخواسته",
        details: [
          "عملکرد روان و بادوام",
          "قفل ایمنی برای حمل و نگهداری",
          "مناسب مصارف خانگی و صنعتی",
        ],
        subsets: [
          { src: img("trigger-detail-11") },
          { src: img("trigger-detail-12") },
          { src: img("trigger-detail-13") },
          { src: img("trigger-detail-14") },
          { src: img("trigger-detail-15") },
        ],
      },
      {
        src: img("trigger-pump-4"),
        name: "پمپ تریگر دهانه 24/410 ",
        text: "مجهز به سیستم مکش داخلی، نازل اسپری‌کننده و مکانیزم پاشش قابل‌کنترل برای توزیع یکنواخت مایعات",
        details: [
          "مجهز به فنر بازگشت اهرم",
          "خروجی اسپری ریز و یکنواخت",
          "اهرم با فرم کشیده و خوش‌دست",
        ],
        subsets: [
          { src: img("trigger-detail-16") },
          { src: img("trigger-detail-17") },
          { src: img("trigger-detail-18") },
          { src: img("trigger-detail-19") },
          { src: img("trigger-detail-20") },
        ],
      },
    ],
  },
  {
    slug: "pump-spray",
    parent: "pump",
    title: "پمپ اسپری",
    tagline: "مه‌ای ریز و یکنواخت.",
    description:
      "پمپ‌های اسپری برای عطرها و محصولات آرایشی و بهداشتی که به پاشش ظریف و یکنواخت نیاز دارند.",
    products: [
      {
        src: img("pump-spray-1"),
        name: "پمپ اسپری مه‌پاش",
        text: "پاشش ظریف و یکنواخت برای محصولات آرایشی و بهداشتی",
        details: [
          "مه ریز و یکنواخت",
          "فشار نرم و کنترل‌شده",
          "مناسب بطری‌های کوچک و متوسط",
        ],
        subsets: [
          { src: img("pump-spray-1") },
          { src: img("pump-spray-1-detail") },
        ],
      },
      {
        src: img("pump-spray-2"),
        name: "پمپ اسپری با درپوش",
        text: "دارای درپوش محافظ برای حفظ نازل و جلوگیری از آلودگی",
        details: [
          "درپوش محافظ نازل",
          "ظاهر شیک و مناسب بسته‌بندی",
          "خروجی دقیق در هر پاشش",
        ],
        subsets: [
          { src: img("pump-spray-2") },
          { src: img("pump-spray-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-nozzle",
    parent: "pump",
    title: "پمپ نازل‌دار",
    tagline: "خروجی هدایت‌شده و دقیق.",
    description:
      "پمپ‌های نازل‌دار با خروجی کشیده، مناسب توزیع دقیق مایعات در نقطه موردنظر.",
    products: [
      {
        src: img("pump-nozzle-1"),
        name: "پمپ نازل کوتاه",
        text: "خروجی هدایت‌شده برای توزیع دقیق مایعات",
        details: [
          "نازل کوتاه و کاربردی",
          "کنترل بهتر جهت خروجی",
          "مناسب مایعات با غلظت کم",
        ],
        subsets: [
          { src: img("pump-nozzle-1") },
          { src: img("pump-nozzle-1-detail") },
        ],
      },
      {
        src: img("pump-nozzle-2"),
        name: "پمپ نازل بلند",
        text: "نازل کشیده برای دسترسی به نقاط تنگ و توزیع دقیق‌تر",
        details: [
          "نازل بلند و باریک",
          "مناسب بطری‌های با گلوگاه باریک",
          "خروجی دقیق و بدون پاشیدگی",
        ],
        subsets: [
          { src: img("pump-nozzle-2") },
          { src: img("pump-nozzle-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-foam",
    parent: "pump",
    title: "پمپ و اسپری فوم‌ساز",
    tagline: "کف نرم و یکنواخت.",
    description:
      "پمپ‌ها و اسپری‌های فوم‌ساز برای تبدیل مایع به کف، مناسب شوینده‌ها و محصولات بهداشتی.",
    products: [
      {
        src: img("pump-foam-1"),
        name: "پمپ فوم‌ساز استاندارد",
        text: "تبدیل مایع به کف نرم و یکنواخت با هر بار فشار",
        details: [
          "کف غنی و یکنواخت",
          "مناسب مایع‌های رقیق‌شده",
          "کاهش مصرف محصول",
        ],
        subsets: [
          { src: img("pump-foam-1") },
          { src: img("pump-foam-1-detail") },
        ],
      },
      {
        src: img("pump-foam-2"),
        name: "پمپ فوم‌ساز با درپوش",
        text: "دارای درپوش محافظ شفاف برای حفظ پمپ و نظافت بیشتر",
        details: [
          "درپوش شفاف محافظ",
          "ظاهر شیک و مناسب بسته‌بندی",
          "عملکرد روان و بادوام",
        ],
        subsets: [
          { src: img("pump-foam-2") },
          { src: img("pump-foam-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-lidocaine",
    parent: "pump",
    title: "پمپ لیدوکائین",
    tagline: "دقت در هر پاشش.",
    description:
      "پمپ‌های مناسب اسپری‌های موضعی و دارویی، با پاشش یکنواخت و کنترل‌شده.",
    products: [
      {
        src: img("pump-lidocaine-1"),
        name: "پمپ اسپری موضعی",
        text: "پاشش یکنواخت و دقیق برای محصولات موضعی",
        details: [
          "پاشش کنترل‌شده",
          "دوز یکنواخت در هر بار فشار",
          "مناسب بطری‌های کوچک",
        ],
        subsets: [
          { src: img("pump-lidocaine-1") },
          { src: img("pump-lidocaine-1-detail") },
        ],
      },
      {
        src: img("pump-lidocaine-2"),
        name: "پمپ اسپری دارویی",
        text: "مناسب بسته‌بندی‌های دارویی با نیاز به دقت بالا",
        details: [
          "ساخت مناسب بسته‌بندی دارویی",
          "کنترل بهتر میزان خروجی",
          "سازگار با گلوگاه‌های استاندارد",
        ],
        subsets: [
          { src: img("pump-lidocaine-2") },
          { src: img("pump-lidocaine-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-thick",
    parent: "pump",
    title: "پمپ غلیظ‌پاش",
    tagline: "برای مایعات سنگین.",
    description:
      "پمپ‌های مخصوص محصولات با ویسکوزیته بالا، با خروجی قوی و روان.",
    products: [
      {
        src: img("pump-thick-1"),
        name: "پمپ غلیظ‌پاش استاندارد",
        text: "خروجی قوی برای مایعات غلیظ و چسبناک",
        details: [
          "مناسب مایعات با ویسکوزیته بالا",
          "عملکرد روان بدون گیر کردن",
          "بدنه مقاوم و بادوام",
        ],
        subsets: [
          { src: img("pump-thick-1") },
          { src: img("pump-thick-1-detail") },
        ],
      },
      {
        src: img("pump-thick-2"),
        name: "پمپ غلیظ‌پاش قفل‌دار",
        text: "دارای قفل برای جلوگیری از نشت محتویات هنگام حمل",
        details: [
          "قفل ایمنی روی پمپ",
          "خروجی یکنواخت",
          "مناسب مصارف صنعتی و خانگی",
        ],
        subsets: [
          { src: img("pump-thick-2") },
          { src: img("pump-thick-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-vertical",
    parent: "pump",
    title: "پمپ عمودپاش",
    tagline: "پاشش مستقیم و رو به بالا.",
    description:
      "پمپ‌های با پاشش عمودی، مناسب بطری‌ها و کاربردهایی که پاشش مستقیم لازم دارند.",
    products: [
      {
        src: img("pump-vertical-1"),
        name: "پمپ عمودپاش استاندارد",
        text: "پاشش مستقیم و رو به بالا با خروجی یکنواخت",
        details: [
          "پاشش عمودی و مستقیم",
          "طراحی ساده و کاربردی",
          "مناسب بطری‌های متنوع",
        ],
        subsets: [
          { src: img("pump-vertical-1") },
          { src: img("pump-vertical-1-detail") },
        ],
      },
      {
        src: img("pump-vertical-2"),
        name: "پمپ عمودپاش با درپوش",
        text: "درپوش محافظ برای حفظ نازل و بهداشت بیشتر",
        details: ["درپوش محافظ نازل", "خروجی کنترل‌شده", "ظاهر مرتب و شیک"],
        subsets: [
          { src: img("pump-vertical-2") },
          { src: img("pump-vertical-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-nasal",
    parent: "pump",
    title: "پمپ اسپری بینی",
    tagline: "پاشش نرم و دقیق.",
    description: "پمپ‌های اسپری بینی با دوز پاشش یکنواخت و طراحی ایمن.",
    products: [
      {
        src: img("pump-nasal-1"),
        name: "پمپ اسپری بینی استاندارد",
        text: "پاشش نرم و یکنواخت با طراحی مناسب استفاده بینی",
        details: [
          "نازل مناسب و راحت",
          "پاشش دقیق و یکنواخت",
          "مناسب بطری‌های کوچک",
        ],
        subsets: [
          { src: img("pump-nasal-1") },
          { src: img("pump-nasal-1-detail") },
        ],
      },
      {
        src: img("pump-nasal-2"),
        name: "پمپ اسپری بینی با درپوش",
        text: "دارای درپوش محافظ برای بهداشت و حفظ نازل",
        details: [
          "درپوش محافظ نازل",
          "عملکرد روان و کنترل‌شده",
          "طراحی ایمن و بهداشتی",
        ],
        subsets: [
          { src: img("pump-nasal-2") },
          { src: img("pump-nasal-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "pump-pressure",
    parent: "pump",
    title: "پمپ اسپری تحت فشار",
    tagline: "پاشش قدرتمند و پیوسته.",
    description:
      "پمپ‌های اسپری تحت فشار برای محصولاتی که به پاشش قوی و پیوسته نیاز دارند.",
    products: [
      {
        src: img("pump-pressure-1"),
        name: "پمپ اسپری تحت فشار استاندارد",
        text: "پاشش قوی و پیوسته برای مصارف متنوع",
        details: ["فشار پاشش بالا", "خروجی پیوسته و یکنواخت", "بدنه مقاوم"],
        subsets: [
          { src: img("pump-pressure-1") },
          { src: img("pump-pressure-1-detail") },
        ],
      },
      {
        src: img("pump-pressure-2"),
        name: "پمپ اسپری تحت فشار قفل‌دار",
        text: "دارای قفل ایمنی برای حمل و نگهداری بدون نشت",
        details: ["قفل ایمنی", "عملکرد روان", "مناسب مصارف خانگی و صنعتی"],
        subsets: [
          { src: img("pump-pressure-2") },
          { src: img("pump-pressure-2-detail") },
        ],
      },
    ],
  },

  /* ---------- درب ---------- */
  {
    slug: "cap-dropper",
    parent: "cap",
    title: "قطره‌چکان",
    tagline: "چکاندن دقیق، قطره به قطره.",
    description:
      "درب‌های قطره‌چکان برای سرم‌ها، روغن‌ها و مایعاتی که به مصرف دقیق نیاز دارند.",
    products: [
      {
        src: img("cap-dropper-1"),
        name: "قطره‌چکان شیشه‌ای",
        text: "قطره‌چکان با لوله شیشه‌ای و سر لاستیکی برای مصرف دقیق",
        details: [
          "لوله شیشه‌ای شفاف",
          "سر لاستیکی انعطاف‌پذیر",
          "مناسب سرم و روغن",
        ],
        subsets: [
          { src: img("cap-dropper-1") },
          { src: img("cap-dropper-1-detail") },
        ],
      },
      {
        src: img("cap-dropper-2"),
        name: "قطره‌چکان با درب رنگی",
        text: "ترکیب درب رنگی با قطره‌چکان برای ظاهری هماهنگ با برند",
        details: [
          "درب در رنگ‌های متنوع",
          "چکاندن دقیق و کنترل‌شده",
          "سازگار با بطری‌های استاندارد",
        ],
        subsets: [
          { src: img("cap-dropper-2") },
          { src: img("cap-dropper-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "cap-plastic",
    parent: "cap",
    title: "درب پلاستیکی",
    tagline: "سبک، متنوع و کاربردی.",
    description:
      "درب‌های پلاستیکی در رنگ‌ها و مدل‌های مختلف، سازگار با انواع بطری‌ها.",
    products: [
      {
        src: img("cap-plastic-1"),
        name: "درب پیچی پلاستیکی",
        text: "درب پیچی ساده و کاربردی با آب‌بندی مناسب",
        details: [
          "آب‌بندی مناسب",
          "رنگ‌های متنوع",
          "سازگار با گلوگاه‌های استاندارد",
        ],
        subsets: [
          { src: img("cap-plastic-1") },
          { src: img("cap-plastic-1-detail") },
        ],
      },
      {
        src: img("cap-plastic-2"),
        name: "درب فلیپ‌تاپ",
        text: "درب با دریچه بازشونده برای استفاده راحت با یک دست",
        details: [
          "دریچه بازشونده",
          "باز و بسته کردن آسان",
          "مناسب شامپو و محصولات مایع",
        ],
        subsets: [
          { src: img("cap-plastic-2") },
          { src: img("cap-plastic-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "cap-aluminum",
    parent: "cap",
    title: "درب آلومینیومی",
    tagline: "ظاهری مستحکم و لوکس.",
    description:
      "درب‌های آلومینیومی با ظاهر شیک و مقاوم، مناسب بسته‌بندی‌های لوکس.",
    products: [
      {
        src: img("cap-aluminum-1"),
        name: "درب آلومینیومی ساده",
        text: "درب آلومینیومی مات با ظاهر شیک و مقاوم",
        details: [
          "بدنه آلومینیومی مقاوم",
          "ظاهر لوکس و یکدست",
          "مناسب بسته‌بندی‌های آرایشی",
        ],
        subsets: [
          { src: img("cap-aluminum-1") },
          { src: img("cap-aluminum-1-detail") },
        ],
      },
      {
        src: img("cap-aluminum-2"),
        name: "درب آلومینیومی رنگی",
        text: "درب آلومینیومی در رنگ‌های متنوع برای هماهنگی با برند",
        details: [
          "رنگ‌های متنوع",
          "سطح یکنواخت و بادوام",
          "سازگار با بطری‌های استاندارد",
        ],
        subsets: [
          { src: img("cap-aluminum-2") },
          { src: img("cap-aluminum-2-detail") },
        ],
      },
    ],
  },

  /* ---------- بطری ---------- */
  {
    slug: "bottle-airless",
    parent: "bottle",
    title: "بطری ایرلس",
    tagline: "محافظت از فرمول تا آخرین قطره.",
    description:
      "بطری‌های ایرلس که از تماس محصول با هوا جلوگیری می‌کنند، مناسب فرمول‌های حساس.",
    products: [
      {
        src: img("bottle-airless-1"),
        name: "بطری ایرلس استاندارد",
        text: "جلوگیری از تماس محصول با هوا و مصرف تا آخرین قطره",
        details: [
          "حفاظت از فرمول حساس",
          "تخلیه کامل محتویات",
          "مناسب کرم و سرم",
        ],
        subsets: [
          { src: img("bottle-airless-1") },
          { src: img("bottle-airless-1-detail") },
        ],
      },
      {
        src: img("bottle-airless-2"),
        name: "بطری ایرلس لوکس",
        text: "طراحی شیک با بدنه یکدست برای برندهای آرایشی",
        details: [
          "ظاهر لوکس و یکدست",
          "عملکرد روان پمپ",
          "رنگ‌ها و حجم‌های متنوع",
        ],
        subsets: [
          { src: img("bottle-airless-2") },
          { src: img("bottle-airless-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "bottle-polymer",
    parent: "bottle",
    title: "بطری پلیمری",
    tagline: "سبک، مقاوم و اقتصادی.",
    description:
      "بطری‌های پلیمری در حجم‌ها و رنگ‌های مختلف، مناسب انواع محصولات مایع.",
    products: [
      {
        src: img("bottle-polymer-1"),
        name: "بطری پلیمری گرد",
        text: "بطری سبک و مقاوم در برابر ضربه برای انواع مایعات",
        details: [
          "سبک و مقاوم",
          "حجم‌های متنوع",
          "سازگار با پمپ و درب‌های استاندارد",
        ],
        subsets: [
          { src: img("bottle-polymer-1") },
          { src: img("bottle-polymer-1-detail") },
        ],
      },
      {
        src: img("bottle-polymer-2"),
        name: "بطری پلیمری چهارگوش",
        text: "طراحی چهارگوش با ظاهری متمایز روی قفسه",
        details: [
          "شکل متمایز و مدرن",
          "رنگ‌های متنوع",
          "مناسب محصولات آرایشی و بهداشتی",
        ],
        subsets: [
          { src: img("bottle-polymer-2") },
          { src: img("bottle-polymer-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "bottle-glass",
    parent: "bottle",
    title: "بطری شیشه‌ای",
    tagline: "شفافیت و ظاهر اصیل.",
    description:
      "بطری‌های شیشه‌ای مناسب محصولات آرایشی و عطری، با ظاهری مرغوب و ماندگار.",
    products: [
      {
        src: img("bottle-glass-1"),
        name: "بطری شیشه‌ای شفاف",
        text: "بطری شیشه‌ای شفاف با ظاهری مرغوب برای محصولات آرایشی",
        details: [
          "شیشه شفاف و باکیفیت",
          "ظاهر مرغوب و ماندگار",
          "سازگار با پمپ و قطره‌چکان",
        ],
        subsets: [
          { src: img("bottle-glass-1") },
          { src: img("bottle-glass-1-detail") },
        ],
      },
      {
        src: img("bottle-glass-2"),
        name: "بطری شیشه‌ای رنگی",
        text: "شیشه رنگی برای محافظت بیشتر محتویات در برابر نور",
        details: ["محافظت در برابر نور", "رنگ‌های متنوع", "مناسب عطر و روغن"],
        subsets: [
          { src: img("bottle-glass-2") },
          { src: img("bottle-glass-2-detail") },
        ],
      },
    ],
  },

  /* ---------- سایر ملزومات ---------- */
  {
    slug: "mini-bag-cosmetic",
    parent: "accessories",
    title: "مینی‌بگ آرایشی",
    tagline: "کوچک، منظم و همراه شما.",
    description:
      "مینی‌بگ‌های آرایشی برای نگهداری و حمل لوازم آرایشی و بهداشتی.",
    products: [
      {
        src: img("mini-bag-cosmetic-1"),
        name: "مینی‌بگ آرایشی ساده",
        text: "کیف کوچک و منظم برای نگهداری لوازم آرایشی",
        details: ["جنس مقاوم و سبک", "زیپ محکم", "مناسب حمل روزمره"],
        subsets: [
          { src: img("mini-bag-cosmetic-1") },
          { src: img("mini-bag-cosmetic-1-detail") },
        ],
      },
      {
        src: img("mini-bag-cosmetic-2"),
        name: "مینی‌بگ آرایشی طرح‌دار",
        text: "طرح‌های متنوع برای ظاهری جذاب‌تر و مناسب هدیه",
        details: [
          "طرح‌ها و رنگ‌های متنوع",
          "فضای منظم برای لوازم",
          "مناسب هدیه و تبلیغات",
        ],
        subsets: [
          { src: img("mini-bag-cosmetic-2") },
          { src: img("mini-bag-cosmetic-2-detail") },
        ],
      },
    ],
  },
  {
    slug: "mini-bag-travel",
    parent: "accessories",
    title: "مینی‌بگ مسافرتی",
    tagline: "سفر سبک‌تر، مرتب‌تر.",
    description: "مینی‌بگ‌های مسافرتی برای حمل راحت محصولات در سفر.",
    products: [
      {
        src: img("mini-bag-travel-1"),
        name: "مینی‌بگ مسافرتی ساده",
        text: "کیف جمع‌وجور برای حمل محصولات شخصی در سفر",
        details: ["جمع‌وجور و سبک", "زیپ محکم و امن", "مناسب سفر کوتاه و بلند"],
        subsets: [
          { src: img("mini-bag-travel-1") },
          { src: img("mini-bag-travel-1-detail") },
        ],
      },
      {
        src: img("mini-bag-travel-2"),
        name: "مینی‌بگ مسافرتی چندبخشی",
        text: "دارای بخش‌های جداگانه برای نظم بیشتر وسایل",
        details: [
          "چند جیب و بخش جداگانه",
          "جنس مقاوم",
          "مناسب بطری‌های کوچک سفری",
        ],
        subsets: [
          { src: img("mini-bag-travel-2") },
          { src: img("mini-bag-travel-2-detail") },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getChildren(parent: string | null) {
  return categories.filter((c) => c.parent === parent);
}
