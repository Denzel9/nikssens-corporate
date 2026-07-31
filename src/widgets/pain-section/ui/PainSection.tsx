"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { SectionHeading } from "@/shared/ui";

const before = [
  "Бриф в Google Docs",
  "Договорённости в Telegram",
  "Дедлайны в Excel",
  "Отчётность размазана по чатам",
  "Поиск в социальных сетях",
];

const after = [
  "Объявление с брифом в одном посте",
  "Отклики и статусы в продукте",
  "CRM задач, мультизадачи и календарь",
  "Публикация и отчёт в одном контуре",
  "Мультиаккаунт для команд и агентств",
];

export function PainSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Вместо чатов и таблиц"
          description="Рынок часто живёт в Соц. сеть + Excel + Google Docs. Nikssens собирает цикл коллаборации в один продукт."
        />
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 3, md: 3.5 },
                borderRadius: "32px",
                bgcolor: "background.paper",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 2.5, color: "text.secondary" }}>
                Сейчас
              </Typography>
              <Stack spacing={1.5}>
                {before.map((item) => (
                  <Stack key={item} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    <CloseRoundedIcon sx={{ color: "rgba(255,255,255,0.35)", fontSize: 20, mt: 0.2 }} />
                    <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.5 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 3, md: 3.5 },
                borderRadius: "32px",
                bgcolor: "primary.main",
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 2.5 }}>
                С Nikssens
              </Typography>
              <Stack spacing={1.5}>
                {after.map((item) => (
                  <Stack key={item} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    <CheckRoundedIcon sx={{ fontSize: 20, mt: 0.2 }} />
                    <Typography sx={{ fontSize: 15, lineHeight: 1.5 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
