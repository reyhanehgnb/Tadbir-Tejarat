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

export const categories: Category[] = [
  {
    slug: "pump",
    parent: null,
    title: "پمپ اسپری",
    tagline: "جزئیات کوچک، تجربه‌ای متفاوت.",
    description:
      "مجموعه‌ای از پمپ‌های اسپری و مکانیزم‌های پاشش برای بسته‌بندی محصولات آرایشی، بهداشتی و صنعتی.",
    products: [
      {
        src: img("product-1"),
        name: "پمپ اسپری تریگر",
        text: "کنترل بیشتر، عملکرد دقیق‌تر و طراحی کاربردی برای مصارف متنوع.",
        details: [
          "مناسب برای محصولات شوینده و پاک‌کننده",
          "طراحی ارگونومیک برای استفاده آسان",
          "قابل انتخاب در مدل‌ها و ابعاد مختلف",
        ],
        subsets: [
          { src: img("product-1"), label: "نمای کامل" },
          { src: img("product-6"), label: "نمای نزدیک پمپ" },
          { src: img("product-7"), label: "درب و نازل" },
          { src: img("product-8"), label: "جزئیات طراحی" },
        ],
      },
      {
        src: img("product-2"),
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
        src: img("product-3"),
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
  {
    slug: "bottle-spray",
    parent: "bottle",
    title: "بطری‌های اسپری و عطری",
    tagline: "برای هر پاشش، یک بطری مناسب.",
    description:
      "بطری‌های ویژه‌ی محصولات اسپری و عطر، با گلویی سازگار با پمپ‌های مه‌پاش.",
    products: [],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getChildren(parent: string | null) {
  return categories.filter((c) => c.parent === parent);
}
