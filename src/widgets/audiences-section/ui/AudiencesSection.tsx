"use client";

import { useState } from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { authLink } from "@/shared/config";
import { GradientButton, SectionHeading } from "@/shared/ui";

type AudienceId = "brand" | "creator" | "agency";

const audiences: {
  id: AudienceId;
  label: string;
  pain: string;
  actions: string[];
  cta: string;
  href: string;
}[] = [
    {
      id: "brand",
      label: "Бренд",
      pain: "Поиск в соц. сетях, согласование и отчетность по чатам и документам.",
      actions: [
        "Поиск исполнителей и отклики в одном месте",
        "Чат и комментарии в каждой задаче",
        "Ведёте задачу до результата и выгружаете отчетность в одном контуре",
        "Сохраняйте исполнителей в избранное для повторных сотрудничеств",
        "И многое другое..."
      ],
      cta: "Начать",
      href: authLink.href,
    },
    {
      id: "creator",
      label: "Исполнитель",
      pain: "Заказы размазаны по соцсетям и личным сообщениям. Сложно контролировать задачи и сроки для нескольких брендов.",
      actions: [
        "Поиск объявлений в ленте и гибким поиском",
        "Чат, список задачи, задание и итоги работы в одном диалоге",
        "Ведите задачи в удобном формате: канбан, таблица или карточки",
        "Отчетность и итоги работы в одном контуре",
        "И многое другое..."
      ],
      cta: "Начать",
      href: authLink.href,
    },
    {
      id: "agency",
      label: "Агентство",
      pain: "Несколько брендов и исполнителей — разные чаты и таблицы.",
      actions: [
        "Мультиаккаунт: для работы менеджеров от лица бренда",
        "Кросс-аккаунт: управляете несколькими профилями",
        "Мультизадачи: несколько задач в рамках одного объявления",
        "Просмотр CRM, календарь, отчёты и много другое от лица менеджера",
        "И многое другое..."
      ],
      cta: "Начать",
      href: "/pricing",
    },
  ];

export function AudiencesSection() {
  const [activeId, setActiveId] = useState<AudienceId>("brand");
  const active = audiences.find((item) => item.id === activeId) ?? audiences[0];

  return (
    <Box id="audiences" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Для кого Nikssens"
          description="Один продукт — множество сценариев. Выберите роль и посмотрите, с чего начать."
        />

        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}>
          {audiences.map((item) => {
            const selected = item.id === activeId;

            return (
              <Box
                key={item.id}
                component="button"
                type="button"
                onClick={() => setActiveId(item.id)}
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
                {item.label}
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
          <Typography sx={{ color: "text.secondary", fontSize: 15, mb: 2, lineHeight: 1.6 }}>
            Боль: {active.pain}
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1.5 }}>
            Что делаете в Nikssens
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 3 }}>
            {active.actions.map((action) => (
              <Typography
                key={action}
                component="li"
                sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.7, mb: 0.75 }}
              >
                {action}
              </Typography>
            ))}
          </Box>
          <GradientButton
            {...(active.href.startsWith("/")
              ? { component: NextLink, href: active.href }
              : { href: active.href })}
          >
            {active.cta}
          </GradientButton>
        </Box>
      </Container>
    </Box>
  );
}
