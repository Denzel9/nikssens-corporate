"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/shared/ui";
import { Stack } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

const metrics = [
  { value: "1 контур", label: "вместо множества инструментов" },
  { value: "5 шагов", label: "от брифа до публикации" },
  { value: "2 стороны", label: "бренд и исполнитель в одном сценарии" },
  { value: "2 роли", label: "владелец страницы и администратор" },
];

const MetricCard = ({ metric, sx }: { metric: typeof metrics[number], sx?: SxProps<Theme> }) => {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 3.5 },
        borderRadius: "24px",
        bgcolor: "background.paper",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        height: "100%",
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 28, md: 32 },
          letterSpacing: "-0.03em",
          mb: 1,
        }}
      >
        {metric.value}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.5 }}>
        {metric.label}
      </Typography>
    </Box>
  );
};

export function MetricsSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Ценность в цифрах"
          description="Не отзывы — опорные свойства продукта, которые экономят время менеджеру и исполнителю."
        />

        {/* only desktop view */}
        <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
          {metrics.map((metric) => (
            <Grid key={metric.value} size={{ xs: 12, sm: 6, md: 3 }}>
              <MetricCard metric={metric} />
            </Grid>
          ))}
        </Grid>

        {/* only mobile view */}
        <Stack direction="row" spacing={2} sx={{ display: { xs: "flex", md: "none" }, overflowX: "auto", scrollbarWidth: "none" }}>
          {metrics.map((metric) => (
            <MetricCard key={metric.value} metric={metric} sx={{ width: '300px', flexShrink: 0, height: '150px' }} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
