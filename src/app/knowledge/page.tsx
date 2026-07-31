import type { Metadata } from "next";
import { KnowledgePage } from "@/views/knowledge";

export const metadata: Metadata = {
  title: "База знаний — Nikssens",
  description:
    "Как работать в Nikssens: главная лента, поиск исполнителей и брендов, объявления, отклики, задачи, роли и Prime.",
};

export default function KnowledgeRoute() {
  return <KnowledgePage />;
}
