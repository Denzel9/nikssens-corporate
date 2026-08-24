export type GuideAudience = "brand" | "creator" | "agency" | "manager";

export type GuideMockVariant =
  | "feed"
  | "create-post"
  | "responses"
  | "crm"
  | "task"
  | "chat"
  | "profile";

export type GuideStepMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; youtubeId: string }
  | { type: "mock"; variant: GuideMockVariant };

export type GuideStep = {
  title: string;
  description: string;
  bullets?: string[];
  /** Подпись под кадром: что на экране и для кого */
  caption?: string;
  media?: GuideStepMedia;
};

export type Guide = {
  slug: string;
  audience: GuideAudience;
  title: string;
  description: string;
  /** Примерная длительность прохождения сценария */
  duration: string;
  /** Что получит пользователь в конце */
  outcome: string;
  /** Полное видео сценария (YouTube id), опционально */
  videoId?: string;
  steps: GuideStep[];
  relatedKnowledge?: string[];
};

export const guideAudienceLabels: Record<GuideAudience, string> = {
  brand: "Бренд",
  creator: "Исполнитель",
  agency: "Агентство",
  manager: "Менеджер",
};
