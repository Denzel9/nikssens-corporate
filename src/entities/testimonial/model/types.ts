export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "anna",
    name: "Анна Крылова",
    role: "Маркетолог, бренд косметики",
    quote:
      "Раньше брифы жили в Docs, а договорённости — в Telegram. В Nikssens весь цикл от объявления до публикации в одном месте, и ничего не теряется.",
    rating: 5,
  },
  {
    id: "dmitry",
    name: "Дмитрий Орлов",
    role: "UGC-исполнитель",
    quote:
      "Вижу заказы в ленте, откликаюсь и сразу попадаю в задачу с дедлайнами и чатом. Гораздо быстрее, чем переписка в мессенджерах.",
    rating: 5,
  },
  {
    id: "elena",
    name: "Елена Васильева",
    role: "Продюсер, digital-агентство",
    quote:
      "Команда на одном аккаунте с ролями — удобно. Канбан и фильтры «что горит» экономят часы менеджерам каждую неделю.",
    rating: 5,
  },
];

export const stats: Stat[] = [
  {
    id: "cycle",
    value: "1 контур",
    label: "вместо чатов, таблиц и документов",
  },
  {
    id: "flow",
    value: "5 шагов",
    label: "от брифа до публикации результата",
  },
];
