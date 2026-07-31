"use client";

import NextLink from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { authLink } from "@/shared/config";
import { GradientButton, OutlinedPillButton, PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <PageHero
        title="Страница не найдена"
        description="Похоже, такой страницы нет — ссылка устарела или адрес введён с ошибкой."
      />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <GradientButton component={NextLink} href="/">
            На главную
          </GradientButton>
          <OutlinedPillButton component={NextLink} href="/knowledge">
            База знаний
          </OutlinedPillButton>
          <OutlinedPillButton component={NextLink} href="/contacts">
            Контакты
          </OutlinedPillButton>
          <OutlinedPillButton href={authLink.href}>Войти</OutlinedPillButton>
        </Stack>
      </Container>
    </PageShell>
  );
}
