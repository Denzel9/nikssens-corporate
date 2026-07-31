import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticleSlugs,
} from "@/entities/article";
import { ArticlePage } from "@/views/knowledge";

type KnowledgeArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: KnowledgeArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Статья не найдена — Nikssens" };
  }

  return {
    title: `${article.title} — База знаний Nikssens`,
    description: article.description,
  };
}

export default async function KnowledgeArticleRoute({
  params,
}: KnowledgeArticleRouteProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
