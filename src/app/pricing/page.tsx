import type { Metadata } from "next";
import { PricingPage } from "@/views/pricing";

export const metadata: Metadata = {
  title: "Тарифы — Nikssens",
  description:
    "Базовый доступ и Prime-подписка. CRM, мультиаккаунт и мультизадачи открываются с Prime.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
