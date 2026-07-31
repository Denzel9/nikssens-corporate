"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  StatCard,
  TestimonialCard,
  stats,
  testimonials,
} from "@/entities/testimonial";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - 1);

  const goPrev = () => setIndex((current) => Math.max(0, current - 1));
  const goNext = () => setIndex((current) => Math.min(maxIndex, current + 1));

  const active = testimonials[index];

  return (
    <Box id="testimonials" component="section" sx={{ pb: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: { xs: 3, md: 5 },
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
            Отзывы
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              onClick={goPrev}
              disabled={index === 0}
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                color: "text.primary",
                opacity: index === 0 ? 0.35 : 1,
                minWidth: 0,
              }}
            >
              Назад
            </Button>
            <Button
              onClick={goNext}
              disabled={index >= maxIndex}
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                color: "text.primary",
                opacity: index >= maxIndex ? 0.35 : 1,
                minWidth: 0,
              }}
            >
              Далее
            </Button>
          </Stack>
        </Stack>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              key={active.id}
              sx={{
                height: "100%",
                animation: "testimonialFade 0.35s ease both",
              }}
            >
              <TestimonialCard testimonial={active} />
            </Box>
          </Grid>

          {stats.map((stat) => (
            <Grid key={stat.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard stat={stat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
