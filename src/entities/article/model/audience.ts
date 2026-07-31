import type { ArticleAudience } from "./types";

/** Аудитория статей базы знаний по slug. */
export const articleAudienceBySlug: Record<string, ArticleAudience[]> = {
  "glavnaya-lenta-obyavleniy": ["brand", "creator"],
  chat: ["brand", "creator", "agency"],
  izbrannoe: ["brand", "creator"],
  otkliki: ["brand", "creator"],
  dashbord: ["brand", "agency", "prime"],
  "moi-zadachi": ["brand", "creator", "agency", "prime"],
  kalendar: ["brand", "agency", "prime"],
  "poisk-ispolniteley-i-brendov": ["brand", "creator", "agency"],
  publikacii: ["brand", "agency", "prime"],
  profil: ["brand", "creator", "agency"],
  nastroyki: ["brand", "creator", "agency"],
  obyavlenie: ["brand", "creator"],
  zadacha: ["brand", "creator", "agency", "prime"],
  "sozdanie-obyavleniya": ["brand", "agency"],
  "vhod-i-email": ["brand", "creator", "agency"],
  "kak-brendu-opublikovat-pervoe-obyavlenie": ["brand"],
  "kak-nayti-zakaz-i-otkliknutsya": ["creator"],
  "statusy-zadachi": ["brand", "creator", "agency"],
  "roli-komandy": ["brand", "agency"],
  "chto-otkryvaet-prime": ["brand", "agency", "prime"],
};
