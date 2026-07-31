import type { Guide } from "./types";

export const guides: Guide[] = [
  {
    slug: "brend-pervyy-kollab",
    audience: "brand",
    title: "Первый коллаб бренда: от объявления до публикации",
    description:
      "Сквозной сценарий: бриф → отклики → задача → сдача → фиксация результата. С кадрами экранов на каждом шаге.",
    duration: "~10 мин",
    outcome: "Опубликованное объявление, принятый отклик и закрытая задача с результатом",
    steps: [
      {
        title: "Войти и подтвердить email",
        description:
          "Без подтверждённой почты нельзя создавать контент. После входа откройте письмо и подтвердите адрес.",
        caption: "Экран входа · для бренда",
        media: { type: "mock", variant: "profile" },
        bullets: ["Войти через приложение", "Подтвердить email", "Заполнить профиль компании"],
      },
      {
        title: "Создать объявление с брифом",
        description:
          "Укажите формат, площадку, бюджет, дедлайн и требования. Чем конкретнее бриф — тем точнее отклики.",
        caption: "Создание объявления · бренд",
        media: { type: "mock", variant: "create-post" },
        bullets: ["Формат и площадка", "Бюджет и сроки", "Описание и медиа"],
      },
      {
        title: "Разобрать входящие отклики",
        description:
          "Все заявки — в одном списке. Сравните профили, откройте сообщение исполнителя и примите подходящего.",
        caption: "Отклики · бренд",
        media: { type: "mock", variant: "responses" },
      },
      {
        title: "Вести задачу до сдачи",
        description:
          "После принятия создаётся задача: статусы, чат, файлы. На Prime удобнее смотреть канбан и «что горит».",
        caption: "Задача / CRM · бренд",
        media: { type: "mock", variant: "task" },
        bullets: ["Статусы и дедлайн", "Чат внутри задачи", "Проверка черновика"],
      },
      {
        title: "Зафиксировать публикацию",
        description:
          "Когда работа принята — отметьте результат. Контекст коллаба остаётся в задаче, а не в переписке.",
        caption: "Публикация результата · бренд",
        media: { type: "mock", variant: "crm" },
      },
    ],
    relatedKnowledge: [
      "sozdanie-obyavleniya",
      "otkliki",
      "zadacha",
      "kak-brendu-opublikovat-pervoe-obyavlenie",
    ],
  },
  {
    slug: "ispolnitel-ot-poiska-do-sdachi",
    audience: "creator",
    title: "Исполнитель: найти заказ, откликнуться и сдать работу",
    description:
      "Как пройти путь от ленты до закрытой задачи: фильтры, отклик, статусы и сдача в одном контуре.",
    duration: "~8 мин",
    outcome: "Принятый отклик и сданная работа в задаче",
    steps: [
      {
        title: "Профиль и ниши",
        description:
          "Заполните профиль так, чтобы бренд понял формат и аудиторию. Это влияет на доверие к отклику.",
        caption: "Профиль · исполнитель",
        media: { type: "mock", variant: "profile" },
      },
      {
        title: "Найти заказ в ленте",
        description:
          "Используйте быстрые и расширенные фильтры: площадка, бюджет, срочность, удалённо.",
        caption: "Главная · лента объявлений",
        media: { type: "mock", variant: "feed" },
        bullets: ["Поиск по названию", "Фильтры формата и бюджета", "Открыть карточку объявления"],
      },
      {
        title: "Отправить отклик",
        description:
          "Короткое сообщение с фактами: ниша, похожий опыт, сроки. Статус смотрите в «Мои отклики».",
        caption: "Отклик · исполнитель",
        media: { type: "mock", variant: "responses" },
      },
      {
        title: "Работа в задаче и чате",
        description:
          "После принятия откроется задача: бриф, дедлайны, комментарии. Сдавайте черновик здесь же.",
        caption: "Задача и чат · исполнитель",
        media: { type: "mock", variant: "chat" },
      },
    ],
    relatedKnowledge: [
      "glavnaya-lenta-obyavleniy",
      "kak-nayti-zakaz-i-otkliknutsya",
      "otkliki",
      "zadacha",
    ],
  },
  {
    slug: "agentstvo-prime-workspace",
    audience: "agency",
    title: "Агентство на Prime: мультиаккаунт и мультизадачи",
    description:
      "Как вести несколько брендов из одного входа, раздать роли и вести коллаб с несколькими исполнителями.",
    duration: "~12 мин",
    outcome: "Workspace с несколькими профилями и задачей на нескольких исполнителей",
    steps: [
      {
        title: "Подключить Prime",
        description:
          "Биллинг доступен Владельцу или Администратору. После подписки открываются CRM, мультиаккаунт и мультизадачи.",
        caption: "Настройки биллинга · агентство",
        media: { type: "mock", variant: "profile" },
        bullets: ["Подтвердить email", "Открыть биллинг", "Подключить Prime"],
      },
      {
        title: "Мультиаккаунт и роли",
        description:
          "Добавьте профили брендов, которыми управляете, и пригласите сотрудников с ролями Владелец / Администратор.",
        caption: "Команда и аккаунты · агентство",
        media: { type: "mock", variant: "crm" },
      },
      {
        title: "Объявления от нужного бренда",
        description:
          "Переключитесь на нужный профиль и опубликуйте бриф от его имени — контекст не смешивается.",
        caption: "Создание объявления · выбранный бренд",
        media: { type: "mock", variant: "create-post" },
      },
      {
        title: "Мультизадачи",
        description:
          "В одной задаче можно вести нескольких исполнителей: статусы, сроки и коммуникация без десятка чатов.",
        caption: "Задача с несколькими исполнителями · Prime",
        media: { type: "mock", variant: "task" },
      },
      {
        title: "Контроль в CRM",
        description:
          "Дашборд и канбан показывают, что горит по всем активным коллабам агентства.",
        caption: "CRM дашборд · агентство",
        media: { type: "mock", variant: "crm" },
      },
    ],
    relatedKnowledge: ["chto-otkryvaet-prime", "roli-komandy", "dashbord", "moi-zadachi"],
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((guide) => guide.slug === slug);

export const getGuideSlugs = (): string[] => guides.map((guide) => guide.slug);

export const getGuidesByAudience = (audience: Guide["audience"]): Guide[] =>
  guides.filter((guide) => guide.audience === audience);
