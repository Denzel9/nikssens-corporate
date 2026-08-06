import type { Metadata } from "next";
import { PricingPage } from "@/views/pricing";

export const metadata: Metadata = {
  title: "Тарифы — Nikssens",
  description:
    "Бесплатный аккаунт, персональный Prime и корпоративный Prime с лимитами менеджеров. CRM открывается с подпиской.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
