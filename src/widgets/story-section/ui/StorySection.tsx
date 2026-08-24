"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/shared/ui";

type RoleId = "brand" | "creator" | "manager";

const stories: Record<
  RoleId,
  { label: string; items: { time: string; title: string; text: string }[] }
> = {
  brand: {
    label: "Бренд",
    items: [
      {
        time: "09:30",
        title: "Что горит",
        text: "Дашборд показывает неназначенные задачи и дедлайны на сегодня.",
      },
      {
        time: "11:00",
        title: "Отклики",
        text: "Принимает исполнителей по объявлению — без переписки в мессенджерах.",
      },
      {
        time: "14:00",
        title: "Согласование",
        text: "Комментарии и файлы остаются в задаче: статус «на проверке».",
      },
      {
        time: "17:30",
        title: "Публикация",
        text: "Фиксирует результат сотрудничества в публикациях.",
      },
    ],
  },
  creator: {
    label: "Исполнитель",
    items: [
      {
        time: "09:30",
        title: "Лента",
        text: "Находит подходящие объявления фильтрами и поиском на главной.",
      },
      {
        time: "11:00",
        title: "Отклик",
        text: "Отправляет заявку и следит за статусом в «Мои отклики».",
      },
      {
        time: "14:00",
        title: "Задача",
        text: "После принятия открывает ТЗ, чат и дедлайн в одном контуре.",
      },
      {
        time: "17:30",
        title: "Проверка",
        text: "Загружает результат в задачу и ждёт проверки.",
      },
    ],
  },
  manager: {
    label: "Менеджер",
    items: [
      {
        time: "09:30",
        title: "Переключение",
        text: "В «Настройки → Компании» выбирает бренд, от лица которого работает сегодня.",
      },
      {
        time: "11:00",
        title: "Что горит",
        text: "Смотрит дашборд, календарь и задачи компании — как владелец, но в своей роли.",
      },
      {
        time: "14:00",
        title: "Отклики и согласование",
        text: "Принимает исполнителей, комментирует материалы и ведёт статусы задач.",
      },
      {
        time: "17:30",
        title: "Публикация",
        text: "Фиксирует итог сотрудничества в CRM без отдельных таблиц и чатов.",
      },
    ],
  },
};

export function StorySection() {
  const [role, setRole] = useState<RoleId>("brand");
  const active = stories[role];

  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Один день"
          description="Как выглядит работа в Nikssens без рассинхрона чатов, таблиц и документов."
        />

        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}>
          {(Object.keys(stories) as RoleId[]).map((id) => {
            const selected = id === role;

            return (
              <Box
                key={id}
                component="button"
                type="button"
                onClick={() => setRole(id)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 999,
                  border: "1px solid",
                  borderColor: selected ? "primary.main" : "rgba(255,255,255,0.12)",
                  bgcolor: selected ? "primary.main" : "transparent",
                  color: selected ? "#fff" : "text.secondary",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {stories[id].label}
              </Box>
            );
          })}
        </Stack>

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "24px",
            bgcolor: "background.paper",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Stack spacing={3}>
            {active.items.map((item, index) => (
              <Stack
                key={`${role}-${item.time}`}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  pb: index === active.items.length - 1 ? 0 : 3,
                  borderBottom:
                    index === active.items.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: 14,
                    minWidth: 64,
                    pt: 0.3,
                  }}
                >
                  {item.time}
                </Typography>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.65 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
