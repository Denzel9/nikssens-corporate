"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ServiceCard, services } from "@/entities/service";
import { Stack } from "@mui/material";

export function ServicesSection() {
  return (
    <Box id="services" component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            mb: { xs: 2, md: 2.5 },
          }}
        >
          Возможности
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
            maxWidth: 640,
            mb: { xs: 3, md: 5 },
          }}
        >
          Весь цикл сотрудничества в продукте: от объявления до результата — вместо множества инструментов и разрозненных документов.
        </Typography>

        {/* only desktop view */}
        <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        {/* only mobile view */}
        <Stack direction="row" spacing={2} sx={{ display: { xs: "flex", md: "none" }, overflowX: "auto", scrollbarWidth: "none" }}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} sx={{ width: '300px', flexShrink: 0, height: '350px' }} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
