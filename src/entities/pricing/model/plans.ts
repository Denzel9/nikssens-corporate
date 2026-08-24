import { authLink } from "@/shared/config";

export type CorporateSeatTier = {
  label: string;
  managers: string;
  priceRub: number;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  href: string;
  withSeatSelect?: boolean;
};

export const corporateSeatTiers: CorporateSeatTier[] = [
  { label: "до 2", managers: "до 2 менеджеров", priceRub: 990 },
  { label: "до 5", managers: "до 5 менеджеров", priceRub: 3_990 },
  { label: "до 10", managers: "до 10 менеджеров", priceRub: 6_990 },
  { label: "до 20", managers: "до 20 менеджеров", priceRub: 12_990 },
  { label: "до 40", managers: "до 40 менеджеров", priceRub: 24_990 },
  { label: "до 100", managers: "до 100 менеджеров", priceRub: 48_990 },
];

export const formatMonthlyPrice = (priceRub: number) =>
  `${priceRub.toLocaleString("ru-RU")} ₽/мес`;

const personalPrimeFeatures = [
  "CRM задач: список, канбан, таблица",
  "Календарь сроков и дашборд «что требует действия»",
  "Публикации и отчётность",
  "Мультизадачи — задача с несколькими исполнителями",
  "Отчёты по задачам и избранному",
];

const corporatePrimeFeatures = [
  "Всё из персонального Prime",
  "Мультиаккаунт — несколько брендов и профилей",
  "Управление командой и ролями",
  "Добавление менеджеров в рамках тарифа",
  "Отчётность по команде",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Бесплатный",
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
    price: formatMonthlyPrice(590),
    description:
      "Для любого пользователя: CRM и расширенные сценарии в личном аккаунте. Купить может кто угодно.",
    features: personalPrimeFeatures,
    highlighted: true,
    cta: "Подключить",
    href: authLink.href,
  },
  {
    name: "Prime Pro",
    price: formatMonthlyPrice(corporateSeatTiers[0].priceRub),
    description:
      "Компания покупает workspace и добавляет менеджеров в выбранном лимите.",
    features: corporatePrimeFeatures,
    highlighted: false,
    cta: "Подключить",
    href: authLink.href,
    withSeatSelect: true,
  },
];

export const pricingPageDescription =
  "Бесплатный аккаунт, Prime и Prime Pro с лимитами менеджеров. CRM открывается с подпиской; команда и менеджеры — на Prime Pro.";

export const pricingTeaserDescription =
  "Три тарифа: бесплатный, Prime и Prime Pro. У компании — выбор числа менеджеров.";

export const pricingFootnote =
  "Чтобы подключить подписку, сначала авторизуйтесь, подтвердите почту, затем оформите тариф в настройках биллинга. Prime Pro оформляет компания и выбирает лимит менеджеров.";
