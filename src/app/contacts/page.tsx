import type { Metadata } from "next";
import { ContactsPage } from "@/views/contacts";

export const metadata: Metadata = {
  title: "Контакты — Nikssens",
  description:
    "Вопросы по платформе, Prime или онбордингу команды — свяжитесь с Nikssens.",
};

export default function ContactsRoute() {
  return <ContactsPage />;
}
