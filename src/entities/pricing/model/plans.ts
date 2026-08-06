import { authLink } from "@/shared/config";

export type PricingAudience = "personal" | "corporate";

export type CorporateSeatTier = {
  /** Короткий лейбл, например «до 5» */
  label: string;
  /** Полное описание лимита менеджеров */
  managers: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  href: string;
};

/** Лимиты менеджеров для корпоративного Prime */
export const corporateSeatTiers: CorporateSeatTier[] = [
  { label: "2–3", managers: "2–3 менеджера" },
  { label: "до 5", managers: "до 5 менеджеров" },
  { label: "до 10", managers: "до 10 менеджеров" },
  { label: "до 20", managers: "до 20 менеджеров" },
  { label: "до 40", managers: "до 40 менеджеров" },
  { label: "до 100", managers: "до 100 менеджеров" },
];

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

export const personalPricingPlans: PricingPlan[] = [
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
    name: "Персональный Prime",
    price: "Подписка",
    description:
      "Для любого пользователя: CRM и расширенные сценарии в личном аккаунте. Купить может кто угодно.",
    features: personalPrimeFeatures,
    highlighted: true,
    cta: "Подключить Prime",
    href: authLink.href,
  },
];

/** Отдельная карточка на каждый лимит менеджеров */
export const corporatePricingPlans: PricingPlan[] = corporateSeatTiers.map((tier, index) => ({
  name: tier.managers,
  price: "Подписка",
  description:
    "Корпоративный Prime: компания покупает workspace и добавляет менеджеров в выбранном лимите.",
  features: corporatePrimeFeatures,
  highlighted: index === 1,
  cta: "Подключить для компании",
  href: authLink.href,
}));

export const pricingPlansByAudience: Record<PricingAudience, PricingPlan[]> = {
  personal: personalPricingPlans,
  corporate: corporatePricingPlans,
};

/** Все планы (для обратной совместимости) */
export const pricingPlans: PricingPlan[] = [
  ...personalPricingPlans,
  ...corporatePricingPlans,
];

export const pricingPageDescription =
  "Бесплатный аккаунт, персональный Prime и корпоративный Prime с лимитами менеджеров. CRM открывается с подпиской; команда и менеджеры — на корпоративном тарифе.";

export const pricingTeaserDescription =
  "Переключайте персональный и корпоративный тариф. У компании — варианты по числу менеджеров.";

export const pricingFootnote =
  "Чтобы подключить подписку, сначала авторизуйтесь, подтвердите почту, затем оформите тариф в настройках биллинга. Корпоративный Prime оформляет компания и выбирает лимит менеджеров.";
