import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideBySlug, getGuideSlugs } from "@/entities/guide";
import { GuideDetailPage } from "@/views/guides";

type GuideRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuideRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Сценарий не найден — Nikssens" };
  }

  return {
    title: `${guide.title} — Сценарии Nikssens`,
    description: guide.description,
  };
}

export default async function GuideRoute({ params }: GuideRouteProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return <GuideDetailPage guide={guide} />;
}
