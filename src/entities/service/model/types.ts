export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "marketplace" | "applications" | "crm" | "collab" | "publications" | "favorites";
};

export const services: Service[] = [
  {
    id: "marketplace",
    title: "Поиск исполнителей",
    description:
      "Компания публикует объявление: платформы, формат, бюджет, дедлайн, требования и бриф — всё в одном месте.",
    icon: "marketplace",
  },
  {
    id: "applications",
    title: "Отклики",
    description:
      "Исполнитель подаёт заявку. Компания смотрит отклики, принимает или отклоняет — без потери контекста в чатах.",
    icon: "applications",
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "После принятого отклика появляется задача со статусами и сроками. С Prime — мультизадачи: управление несколькими задачами в рамках одного объявления.",
    icon: "crm",
  },
  {
    id: "collab",
    title: "Совместная работа",
    description:
      "Комментарии, медиа, чат и дедлайны рядом с задачей — вся коммуникация остаётся в одном месте. С Prime — мультиаккаунт для работы менеджеров или кросс-аккаунт для управления другими аккаунтами.",
    icon: "collab",
  },
  {
    id: "publications",
    title: "Публикации",
    description:
      "Фиксация результата сотрудничества: отчётность и итог работы в одном контуре.",
    icon: "publications",
  },
  {
    id: "favorites",
    title: "Избранное",
    description:
      "Сохраняйте объявления, бренды или исполнителей в подборки — база контактов для повторных сотрудничеств.",
    icon: "favorites",
  },
];
