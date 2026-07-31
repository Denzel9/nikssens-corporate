"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import { SectionHeading } from "@/shared/ui";

const TelegramIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </SvgIcon>
);

/** Знак MAX: округлый chat bubble (монохром, currentColor). */
const MaxIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 2.5c-5.1 0-9.25 3.72-9.25 8.3 0 2.72 1.45 5.14 3.72 6.72v3.23c0 .55.6.9 1.08.62l3.3-1.9c.37.05.75.08 1.15.08 5.1 0 9.25-3.72 9.25-8.3S17.1 2.5 12 2.5zm0 14.1c-.36 0-.72-.03-1.07-.08l-.42-.06-.35.2-1.91 1.1v-1.72l-.28-.18C6.3 14.7 5.25 12.9 5.25 10.8c0-3.55 3.2-6.3 6.75-6.3s6.75 2.75 6.75 6.3-3.2 6.3-6.75 6.3z" />
  </SvgIcon>
);

const integrations = [
  {
    id: "telegram",
    name: "Telegram",
    tagline: "Бот и уведомления",
    description:
      "Получайте события по откликам, задачам и срокам в Telegram — без потери контекста из Nikssens.",
    features: [
      "Уведомления о новых откликах и статусах",
      "Напоминания о дедлайнах и проверке",
      "Быстрый переход в задачу или чат",
    ],
    Icon: TelegramIcon,
  },
  {
    id: "max",
    name: "MAX",
    tagline: "Мессенджер VK",
    description:
      "Та же лента событий в MAX: удобно командам и агентствам, которые уже работают в экосистеме VK.",
    features: [
      "Уведомления о коллабах и задачах",
      "Синхрон с тем же аккаунтом Nikssens",
      "Канал для команд на российском стеке",
    ],
    Icon: MaxIcon,
  },
] as const;

export function IntegrationsSection() {
  return (
    <Box id="integrations" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Интеграции"
          description="Telegram и MAX — уведомления о работе в Nikssens там, где вы уже на связи. Переписка по коллабу остаётся в продукте."
        />

        <Grid container spacing={2.5}>
          {integrations.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "32px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(77,144,142,0.18)",
                      color: "primary.main",
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                      {item.tagline}
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.65 }}>
                  {item.description}
                </Typography>

                <Box component="ul" sx={{ m: 0, pl: 2.25 }}>
                  {item.features.map((feature) => (
                    <Typography
                      key={feature}
                      component="li"
                      sx={{
                        color: "text.secondary",
                        fontSize: 14,
                        lineHeight: 1.7,
                        mb: 0.75,
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            mt: 3,
            color: "text.secondary",
            fontSize: 14,
            lineHeight: 1.6,
            maxWidth: 640,
          }}
        >
          Площадки коллаба (Instagram, YouTube, TikTok, VK и др.) указываете в брифе
          объявления — это не подключение аккаунтов, а требования к размещению.
        </Typography>
      </Container>
    </Box>
  );
}
