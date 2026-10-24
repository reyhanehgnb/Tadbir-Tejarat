const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (name: string) => `${basePath}/images/products/${name}.webp`;

export type Product = {
  src: string;
  name: string;
  text: string;
  details: string[];
  subsets: { src: string; label: string }[];
};

export type Category = {
  slug: string;
  parent: string | null;
  title: string;
  tagline: string;
  description: string;
  products: Product[];
};

function empty(
  slug: string,
  parent: string,
  title: string,
  tagline: string,
  description: string,
): Category {
  return { slug, parent, title, tagline, description, products: [] };
}

export const categories: Category[] = [
  {
    slug: "pump-push",
    parent: null,
    title: "پمپ اسپری",
    tagline: "جزئیات کوچک، تجربه‌ای متفاوت.",
    description:
      "مجموعه‌ای از پمپ‌های اسپری و مکانیزم‌های پاشش برای بسته‌بندی محصولات آرایشی، بهداشتی و صنعتی.",
    products: [
      {
        src: img("main-lotion-pump"),
        name: "پمپ لوسیون",
        text: "با طراحی کاربردی و خروجی کنترل‌شده، برای استفاده آسان و بهداشتی از لوسیون‌ها و محصولات مراقبت از پوست مناسب است.",
        details: [
          "مناسب برای محصولات شوینده و پاک‌کننده",
          "طراحی ارگونومیک برای استفاده آسان",
          "قابل انتخاب در مدل‌ها و ابعاد مختلف",
        ],
        subsets: [
          { src: img("lotion-pump-1"), label: "نمای کامل" },
          { src: img("lotion-pump-8"), label: "نمای نزدیک پمپ" },
          { src: img("lotion-pump-3"), label: "درب و نازل" },
          { src: img("lotion-pump-5"), label: "جزئیات طراحی" },
        ],
      },
      {
        src: img("lotion-pump-2"),
        name: "پمپ مه‌پاش",
        text: "پاشش ریز و یکنواخت برای محصولاتی که به توزیع ظریف نیاز دارند.",
        details: [
          "مناسب برای محصولات آرایشی و بهداشتی",
          "ایجاد پاشش ظریف و یکنواخت",
          "قابل استفاده در بسته‌بندی‌های متنوع",
        ],
        subsets: [
          { src: img("product-2"), label: "نمای کامل" },
          { src: img("product-2-detail-1"), label: "جزئیات نازل" },
        ],
      },
      {
        src: img("lotion-pump-3"),
        name: "پمپ غلیظ‌پاش",
        text: "مکانیزمی برای توزیع کنترل‌شده‌تر محصولات با فرمولاسیون غلیظ‌تر.",
        details: [
          "مناسب برای فرمولاسیون‌های سازگار با این مکانیزم",
          "امکان انتخاب متناسب با نوع محصول",
          "قابل بررسی در اندازه‌ها و طراحی‌های مختلف",
        ],
        subsets: [
          { src: img("product-3"), label: "نمای کامل" },
          { src: img("product-3-detail-1"), label: "نمای نزدیک" },
        ],
      },
      {
        src: img("product-4"),
        name: "پمپ رقیق‌پاش",
        text: "راهکاری ساده برای توزیع کنترل‌شده مایعات با ویسکوزیته پایین.",
        details: [
          "مناسب برای مایعات سازگار با مکانیزم",
          "طراحی متناسب با بسته‌بندی محصول",
          "قابل انتخاب بر اساس میزان خروجی موردنیاز",
        ],
        subsets: [
          { src: img("product-4"), label: "نمای کامل" },
          { src: img("product-4-detail-1"), label: "نمای نزدیک" },
        ],
      },
      {
        src: img("product-5"),
        name: "پمپ قفل‌دار",
        text: "طراحی کاربردی با قابلیت قفل برای حمل‌ونقل و نگهداری آسان‌تر.",
        details: [
          "کاهش احتمال فشرده‌شدن ناخواسته",
          "مناسب برای بسته‌بندی‌های قابل حمل",
          "انتخاب قفل متناسب با طراحی پمپ",
        ],
        subsets: [
          { src: img("product-5"), label: "نمای کامل" },
          { src: img("product-5-detail-1"), label: "جزئیات قفل" },
        ],
      },
    ],
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
  empty(
    "bottle-spray",
    "bottle",
    "بطری‌های اسپری و عطری",
    "برای هر پاشش، یک بطری مناسب.",
    "بطری‌های ویژه‌ی محصولات اسپری و عطر، با گلویی سازگار با پمپ‌های مه‌پاش.",
  ),
  empty(
    "bottle-round",
    "bottle",
    "بطری‌های گرد و استوانه‌ای",
    "ساده، پرکاربرد و سازگار.",
    "بطری‌های گرد و استوانه‌ای در حجم‌ها و رنگ‌های مختلف، مناسب انواع محصولات مایع.",
  ),
  empty(
    "bottle-detergent",
    "bottle",
    "بطری‌های شوینده و صنعتی",
    "مقاوم برای مصارف سنگین.",
    "بطری‌های مقاوم برای شوینده‌ها، پاک‌کننده‌ها و محصولات صنعتی، سازگار با پمپ‌های فشاری و تریگر.",
  ),
  empty(
    "bottle-pharma",
    "bottle",
    "بطری‌های دارویی و تخصصی",
    "دقت در هر جزئیات.",
    "بطری‌های مناسب محصولات دارویی و تخصصی، با درب‌ها و گلویی‌های استاندارد.",
  ),
  empty(
    "bottle-square",
    "bottle",
    "بطری‌های چهارگوش و خاص",
    "شکلی که روی قفسه دیده می‌شود.",
    "بطری‌های چهارگوش و طرح‌های خاص برای برندهایی که بسته‌بندی متمایز می‌خواهند.",
  ),
  empty(
    "bottle-cosmetic",
    "bottle",
    "بطری‌های آرایشی و بهداشتی",
    "ظریف و کاربردی.",
    "بطری‌های مناسب محصولات آرایشی و بهداشتی، در طرح‌ها و حجم‌های متنوع.",
  ),
  empty(
    "pump-push",
    "pump",
    "پمپ‌های فشاری",
    "فشاری ساده، پاششی دقیق.",
    "پمپ‌های فشاری برای توزیع یکنواخت مایعات و محلول‌ها.",
  ),
  empty(
    "pump-dispenser",
    "pump",
    "پمپ‌های دیسپنسر",
    "هر بار، به اندازه.",
    "پمپ‌های دیسپنسر برای توزیع کنترل‌شده‌ی صابون، لوسیون و مایعات غلیظ.",
  ),
  empty(
    "spray-specialty",
    "pump",
    "اسپری‌های تخصصی",
    "پاشش متناسب با کاربرد.",
    "اسپری‌های تخصصی برای محصولاتی که به الگوی پاشش و خروجی ویژه نیاز دارند.",
  ),
  empty(
    "pump-foam",
    "pump",
    "پمپ و اسپری فوم‌ساز",
    "کف نرم و یکنواخت.",
    "پمپ‌ها و اسپری‌های فوم‌ساز برای تبدیل مایع به کف، مناسب شوینده‌ها و محصولات بهداشتی.",
  ),
  empty(
    "pump-airless",
    "pump",
    "پمپ‌های ایرلس و تخصصی",
    "محافظت از فرمول تا آخرین قطره.",
    "پمپ‌های ایرلس که از تماس محصول با هوا جلوگیری می‌کنند، مناسب فرمول‌های حساس.",
  ),
  empty(
    "pump-fine-mist",
    "pump",
    "پمپ اسپری ظریف و عطری",
    "مه‌ای ریز و یکنواخت.",
    "پمپ‌های مه‌پاش برای عطرها و محصولاتی که به پاشش ظریف نیاز دارند.",
  ),
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getChildren(parent: string | null) {
  return categories.filter((c) => c.parent === parent);
}
