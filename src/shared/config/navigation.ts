export const brand = {
  name: "Nikssens",
  tagline:
    "Платформа, где бренды находят исполнителей и ведут работу от объявления до результата",
  productOneLiner:
    "Поиск → отклик → задача → коммуникация → публикация — в одном месте вместо множества инструментов.",
} as const;

export const navLinks = [
  { label: "База знаний", href: "/knowledge" },
  { label: "Сценарии", href: "/guides" },
  { label: "Блог", href: "/blog" },
  { label: "Тарифы", href: "/pricing" },
  { label: "Контакты", href: "/contacts" },
] as const;

/** URL приложения с авторизацией. Задаётся через NEXT_PUBLIC_PLATFORM_URL. */
export const platformUrl =
  process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://app.nikssens.com";

export const authLink = {
  label: "Войти",
  href: platformUrl,
  external: true,
} as const;

export const socialLinks = [
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/nikssens",
  },
  {
    id: "vk",
    label: "VK",
    href: "https://vk.com/nikssens",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/nikssens",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@nikssens",
  },
] as const;
