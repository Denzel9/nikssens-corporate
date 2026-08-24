"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/shared/ui";
import Image from "next/image";

type PreviewTab = {
  id: string;
  label: string;
  caption: string;
  audience: string;
  content: "feed" | "chat" | "dashboard" | "task" | "responses" | 'favorites' | 'responses' | 'publications' | 'archive' | 'templates' | 'executors' | 'calendar' | 'tasks' | 'profile' | 'create' | 'my-publications';
};

const tabs: PreviewTab[] = [
  {
    id: "home",
    label: "Главная",
    caption: "Лента объявлений с фильтрами и поиском",
    audience: "Для бренда и исполнителя",
    content: "feed",
  }, {
    id: "favorites",
    label: "Избранное",
    caption: "Избранные объявления и исполнители",
    audience: "Для бренда и исполнителя",
    content: "favorites",
  },
  {
    id: "chat",
    label: "Чат",
    caption: "Чат",
    audience: "Для бренда и исполнителя",
    content: "chat",
  },
  {
    id: "responses",
    label: "Отклики",
    caption: "Входящие заявки или «Мои отклики»",
    audience: "Бренд принимает · исполнитель отслеживает",
    content: "responses",
  },
  {
    id: "my-publications",
    label: "Мои публикации",
    caption: "Список моих публикаций",
    audience: "Для бренда и исполнителя",
    content: "my-publications",
  },
  {
    id: "dashboard",
    label: "Дашборд",
    caption: "Панель управления",
    audience: "Для бренда, агентства и исполнителя · Prime",
    content: "dashboard",
  },
  {
    id: "tasks",
    label: "Задачи",
    caption: "Список задач",
    audience: "канбан, таблица или карточки и многое другое",
    content: "tasks",
  },
  {
    id: "calendar",
    label: "Календарь",
    caption: "Календарь задач",
    audience: "Календарь задач",
    content: "calendar",
  },
  {
    id: "executors",
    label: "Исполнители",
    caption: "Список исполнителей",
    audience: "Список исполнителей с количеством задач и откликами",
    content: "executors",
  },
  {
    id: "publications",
    label: "Публикации",
    caption: "Список публикаций",
    audience: "Список публикаций с отчетами и ссылками на посты",
    content: "publications",
  },
  {
    id: "archive",
    label: "Архив",
    caption: "Список архивированных записей",
    audience: "Не актуальные задачи и обьявления",
    content: "archive",
  },
  {
    id: "templates",
    label: "Шаблоны",
    caption: "Список шаблонов",
    audience: "Шаблоны для быстрого создания задач, объявлений и медиафайлов",
    content: "templates",
  },
  {
    id: "task",
    label: "Задача",
    caption: "Статусы, комментарии и несколько исполнителей",
    audience: "Мультизадачи · Prime",
    content: "task",
  },
  {
    id: "profile",
    label: "Профиль",
    caption: "Профиль исполнителя",
    audience: "Профиль исполнителя с информацией о нем",
    content: "profile",
  },
  {
    id: "create",
    label: "Создание объявления",
    caption: "Создание объявления",
    audience: "Создание объявления с информацией о нем",
    content: "create",
  }

];

export function ProductPreviewSection() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <Box id="product-preview" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            mb: { xs: 3, md: 5 },
            justifyContent: "space-between",
            alignItems: { md: "flex-end" },
          }}
        >
          <SectionHeading
            title="Продукт как на экране"
            description="Экраны Nikssens: лента, CRM, задача и отклики. Ниже — интерактивное превью."
          />
          {/* <DemoModalTrigger label="2 минуты о продукте" /> */}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mb: 2, gap: 1, width: "100%", overflowX: "auto", scrollbarWidth: "none" }}>
          {tabs.map((tab) => {
            const selected = tab.id === activeId;

            return (
              <Box
                key={tab.id}
                component="button"
                type="button"
                onClick={() => setActiveId(tab.id)}
                sx={{
                  width: "fit-content",
                  px: 2,
                  py: 1,
                  borderRadius: 999,
                  border: "1px solid",
                  borderColor: selected ? "primary.main" : "rgba(255,255,255,0.12)",
                  bgcolor: selected ? "primary.main" : "transparent",
                  color: selected ? "#fff" : "text.secondary",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  textWrap: "nowrap",
                }}
              >
                {tab.label}
              </Box>
            );
          })}
        </Stack>

        <Box sx={{ width: "100%", height: { xs: 250, md: 650 }, position: "relative", borderRadius: "24px", overflow: "hidden" }}>
          <Image src="/" alt="Product Preview" fill />
        </Box>

        <Stack spacing={0.5} sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{active.caption}</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            {active.audience}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
