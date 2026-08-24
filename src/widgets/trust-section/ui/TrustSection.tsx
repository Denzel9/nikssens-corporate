"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { SectionHeading } from "@/shared/ui";
import { Icon, Stack, SxProps, Theme } from "@mui/material";

const items = [
  {
    icon: MarkEmailReadOutlinedIcon,
    title: "Подтверждение email",
    text: "До подтверждения можно смотреть платформу, но создавать посты, отклики и задачи нельзя. Это доверие и антиспам, не тариф.",
  },
  {
    icon: AdminPanelSettingsOutlinedIcon,
    title: "Мультиаккаунт в корпоративном Prime",
    text: "На корпоративном тарифе аккаунт может управлять другими аккаунтами и добавлять менеджеров в рамках выбранного лимита — удобно агентствам и командам.",
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: "Мультизадачи в Prime",
    text: "Несколько задач на одно объявление — у каждой свой исполнитель, статусы и сроки в одном CRM.",
  },
];

const TrustCard = ({ item, sx }: { item: typeof items[number], sx?: SxProps<Theme> }) => {
  return (
    <Box
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: "24px",
        bgcolor: "background.paper",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          bgcolor: "rgba(255, 255, 255, 0.12)",
          color: "primary.main",
          mb: 2,
        }}
      >
        <Icon component={item.icon} fontSize="small" />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1 }}>
        {item.title}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.65 }}>
        {item.text}
      </Typography>
    </Box>
  );
};

export function TrustSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Доверие и доступы"
          description="Платформа рассчитана на команды и повторные сотрудничества — без спама и без размытых прав."
        />

        {/* only desktop view */}
        <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
          {items.map((item) => {
            return (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <TrustCard item={item} />
              </Grid>
            );
          })}
        </Grid>

        {/* only mobile view */}
        <Stack direction="row" spacing={2} sx={{ display: { xs: "flex", md: "none" }, overflowX: "auto", scrollbarWidth: "none" }}>
          {items.map((item) => (
            <TrustCard key={item.title} item={item} sx={{ width: '300px', flexShrink: 0, height: '300px' }} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
