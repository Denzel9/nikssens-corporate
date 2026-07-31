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
      "Компания публикует коллаб: платформы, формат, бюджет, дедлайн, требования и бриф — всё в одном посте.",
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
    title: "CRM задач",
    description:
      "После принятия появляется задача со статусами и сроками. С Prime — мультизадачи: несколько исполнителей в одной задаче.",
    icon: "crm",
  },
  {
    id: "collab",
    title: "Совместная работа",
    description:
      "Комментарии, медиа, чат и дедлайны рядом с задачей — вся коммуникация остаётся в продукте. С Prime — мультиаккаунт для управления другими аккаунтами.",
    icon: "collab",
  },
  {
    id: "publications",
    title: "Публикации",
    description:
      "Фиксация результата коллаборации: отчётность и итог работы в одном контуре.",
    icon: "publications",
  },
  {
    id: "favorites",
    title: "Избранное",
    description:
      "Сохраняйте посты, бренды или исполнителей в подборки — база контактов для повторных коллабов.",
    icon: "favorites",
  },
];
