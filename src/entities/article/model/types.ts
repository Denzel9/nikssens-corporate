export type ArticleAudience = "brand" | "creator" | "agency" | "prime";

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleGroup = "page" | "topic";

export type Article = {
  slug: string;
  group: ArticleGroup;
  /** Короткое имя для навигации по страницам продукта */
  navLabel: string;
  category: string;
  title: string;
  description: string;
  /** Для кого статья. Пустой массив = общая. */
  audience: ArticleAudience[];
  sections: ArticleSection[];
};

export const audienceLabels: Record<ArticleAudience, string> = {
  brand: "Бренд",
  creator: "Исполнитель",
  agency: "Агентство",
  prime: "Prime",
};
