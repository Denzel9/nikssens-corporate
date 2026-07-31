export type BlogCategory =
  | "product"
  | "case"
  | "brands"
  | "creators";

export type BlogPostSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  description: string;
  date: string;
  sections: BlogPostSection[];
};

export const blogCategoryLabels: Record<BlogCategory, string> = {
  product: "Обновления продукта",
  case: "Кейсы",
  brands: "Для брендов",
  creators: "Для исполнителей",
};
