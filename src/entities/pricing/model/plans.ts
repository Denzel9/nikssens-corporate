import { authLink } from "@/shared/config";

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  href: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Базовый",
    price: "Бесплатно",
    description: "Доступ к платформе с ограниченным функционалом — чтобы начать работу.",
    features: [
      "Лента объявлений и поиск",
      "Профиль компании или исполнителя",
      "Просмотр контента после подтверждения email",
      "Базовые возможности без CRM",
    ],
    highlighted: false,
    cta: "Войти",
    href: authLink.href,
  },
  {
    name: "Prime",
    price: "Подписка",
    description:
      "Для брендов, команд и агентств: CRM, мультиаккаунт на несколько профилей, мультизадачи и отчётность.",
    features: [
      "CRM задач: список, канбан, таблица",
      "Мультиаккаунт — идеально для агентств с несколькими брендами",
      "Мультизадачи — задача с несколькими исполнителями",
      "Календарь сроков и дашборд «что требует действия»",
      "Публикации и отчётность",
      "Управление командой и ролями",
      "Отчёты по задачам и избранному",
    ],
    highlighted: true,
    cta: "Подключить Prime",
    href: authLink.href,
  },
];

export const pricingPageDescription =
  "Базовый доступ и Prime-подписка. CRM, мультиаккаунт и мультизадачи открываются с Prime. Управление подпиской — в настройках биллинга (Владелец страницы / Администратор).";

export const pricingTeaserDescription =
  "Базовый доступ и Prime. CRM, мультиаккаунт и мультизадачи открываются с подпиской.";

export const pricingFootnote =
  "Чтобы подключить подписку, сначала авторизуйтесь, подтвердите почту, затем оформите Prime в настройках биллинга.";
