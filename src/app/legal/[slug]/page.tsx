import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLegalDocumentBySlug,
  getLegalDocumentSlugs,
} from "@/entities/legal";
import { LegalDocumentPage } from "@/views/legal";

type LegalRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLegalDocumentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LegalRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getLegalDocumentBySlug(slug);

  if (!document) {
    return { title: "Документ не найден — Nikssens" };
  }

  return {
    title: `${document.title} — Nikssens`,
    description: document.description,
  };
}

export default async function LegalRoute({ params }: LegalRouteProps) {
  const { slug } = await params;
  const document = getLegalDocumentBySlug(slug);

  if (!document) {
    notFound();
  }

  return <LegalDocumentPage document={document} />;
}
