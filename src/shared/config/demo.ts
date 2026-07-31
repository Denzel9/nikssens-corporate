/** YouTube video id. Set NEXT_PUBLIC_DEMO_VIDEO_ID when the walkthrough is ready. */
export const DEMO_VIDEO_ID = process.env.NEXT_PUBLIC_DEMO_VIDEO_ID ?? "";

export const DEMO_VIDEO_TITLE = "Nikssens за 2 минуты";

export const DEMO_VIDEO_DESCRIPTION =
  "Бриф → отклик → задача → публикация — короткий обзор платформы.";

export const DEMO_WALKTHROUGH_STEPS = [
  "Объявление с брифом",
  "Отклик исполнителя",
  "Задача в CRM",
  "Публикация результата",
] as const;
