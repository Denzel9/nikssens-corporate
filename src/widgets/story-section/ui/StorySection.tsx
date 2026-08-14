"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/shared/ui";

const timeline = [
  {
    time: "09:30",
    title: "Что горит",
    text: "Дашборд показывает задачи без исполнителя и со сроком «сегодня».",
  },
  {
    time: "11:00",
    title: "Отклики",
    text: "Принимает двух исполнителей по новому объявлению — без переписки в Telegram.",
  },
  {
    time: "14:00",
    title: "Согласование",
    text: "Комментарии и файлы остаются в задаче: статус «на проверке».",
  },
  {
    time: "17:30",
    title: "Публикация",
    text: "Фиксирует результат коллаба и сохраняет исполнительа в избранное.",
  },
];

export function StorySection() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Один день менеджера бренда"
          description="Как выглядит работа в Nikssens без рассинхрона чатов, таблиц и документов."
        />
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "24px",
            bgcolor: "background.paper",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Stack spacing={3}>
            {timeline.map((item, index) => (
              <Stack
                key={item.time}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  pb: index === timeline.length - 1 ? 0 : 3,
                  borderBottom:
                    index === timeline.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)",
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
