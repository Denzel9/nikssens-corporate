import type { Metadata } from "next";
import { BlogPage } from "@/views/blog";

export const metadata: Metadata = {
  title: "Блог — Nikssens",
  description:
    "Кейсы, обновления продукта и заметки для брендов и исполнителей на платформе Nikssens.",
};

export default function BlogRoute() {
  return <BlogPage />;
}
