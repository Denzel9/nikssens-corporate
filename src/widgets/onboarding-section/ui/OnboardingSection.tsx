"use client";

import { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { authLink } from "@/shared/config";
import { GradientButton, SectionHeading } from "@/shared/ui";

type RoleId = "brand" | "creator";

const checklists: Record<
  RoleId,
  { label: string; items: { time: string; text: string }[] }
> = {
  brand: {
    label: "Бренд",
    items: [
      { time: "1 мин", text: "Войти и подтвердить email" },
      { time: "2 мин", text: "Заполнить профиль компании" },
      { time: "4 мин", text: "Опубликовать первое объявление с брифом" },
      { time: "1 мин", text: "Сохранить интересных исполнителей в избранное" },
      { time: "2 мин", text: "Принять отклик и открыть задачу (Prime — CRM)" },
    ],
  },
  creator: {
    label: "Исполнитель",
    items: [
      { time: "1 мин", text: "Войти и подтвердить email" },
      { time: "2 мин", text: "Заполнить профиль и ниши" },
      { time: "3 мин", text: "Найти заказ фильтрами или поиском на главной" },
      { time: "2 мин", text: "Откликнуться и проверить статус в «Мои отклики»" },
      { time: "2 мин", text: "После принятия — задача, чат и сдача работы" },
    ],
  },
};

export function OnboardingSection() {
  const [role, setRole] = useState<RoleId>("brand");
  const active = checklists[role];

  return (
    <Box id="onboarding" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Первые 10 минут"
          description="Короткий чеклист после входа — что сделать сразу, чтобы получить ценность в первый день."
        />

        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}>
          {(Object.keys(checklists) as RoleId[]).map((id) => {
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
                {checklists[id].label}
              </Box>
            );
          })}
        </Stack>

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "32px",
            bgcolor: "background.paper",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Stack spacing={1.75} sx={{ mb: 3 }}>
            {active.items.map((item) => (
              <Stack
                key={item.text}
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "flex-start" }}
              >
                <CheckRoundedIcon sx={{ color: "primary.main", mt: 0.15, fontSize: 20 }} />
                <Box>
                  <Typography
                    component="span"
                    sx={{ color: "primary.main", fontWeight: 700, fontSize: 13, mr: 1 }}
                  >
                    {item.time}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: 15, lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: { sm: "center" } }}
          >
            <GradientButton href={authLink.href}>Открыть приложение</GradientButton>
            <Box
              component={Link}
              href="/guides"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "primary.main",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                "&:hover": { opacity: 0.85 },
              }}
            >
              Смотреть сценарии →
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
