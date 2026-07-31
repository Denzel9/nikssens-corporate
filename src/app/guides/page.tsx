import type { Metadata } from "next";
import { GuidesPage } from "@/views/guides";

export const metadata: Metadata = {
  title: "Сценарии — Nikssens",
  description:
    "Пошаговые процессы работы в Nikssens для бренда, исполнителя и агентства — со скринами и видео на каждом шаге.",
};

export default function GuidesRoute() {
  return <GuidesPage />;
}
