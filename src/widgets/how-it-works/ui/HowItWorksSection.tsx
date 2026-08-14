"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/shared/ui";

const steps = [
  { n: "01", title: "Объявление", text: "Компания публикует бриф" },
  { n: "02", title: "Отклик", text: "Исполнитель подаёт заявку" },
  { n: "03", title: "Задача", text: "Согласование и исполнение" },
  { n: "04", title: "Публикация", text: "Фиксация результата" },
] as const;

const perspectives = [
  {
    title: "Бренд видит",
    items: [
      "Ленту исполнителей и входящие отклики",
      "Канбан и фильтры «ждут действия / просрочено»",
      "Календарь, исполнителей и публикации",
      "Команду с ролями: Владелец страницы и Администратор",
    ],
  },
  {
    title: "Исполнитель видит",
    items: [
      "Ленту заказов и поиск по формату/бюджету",
      "Статус своих откликов",
      "Задачи, где он исполнитель",
      "Чат с заказчиком и избранные бренды",
    ],
  },
  {
    title: "Агентство видит",
    items: [
      "Мультиаккаунт: несколько брендов из одного входа",
      "Роли Владелец / Администратор на workspace",
      "Мультизадачи с несколькими исполнителями",
      "CRM, календарь и отчёты на Prime",
    ],
  },
] as const;

export function HowItWorksSection() {
  return (
    <Box id="how-it-works" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Как это работает"
          description="Один сценарий для обеих сторон: от брифа до публикации без потери контекста в чатах и таблицах."
        />

        <Grid container spacing={2} sx={{ mb: { xs: 4, md: 5 } }}>
          {steps.map((step) => (
            <Grid key={step.n} size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "24px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  height: "100%",
                }}
              >
                <Typography sx={{ color: "primary.main", fontWeight: 700, fontSize: 14, mb: 1.5 }}>
                  {step.n}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 0.75 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.5 }}>
                  {step.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ fontWeight: 700, fontSize: { xs: 20, md: 24 }, mb: 2.5 }}>
          Один сценарий — три взгляда
        </Typography>
        <Grid container spacing={2.5}>
          {perspectives.map((side) => (
            <Grid key={side.title} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "24px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 2 }}>
                  {side.title}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.25 }}>
                  {side.items.map((item) => (
                    <Typography
                      key={item}
                      component="li"
                      sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.7, mb: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
