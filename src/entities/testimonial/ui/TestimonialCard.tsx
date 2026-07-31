"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import type { Testimonial } from "../model/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Box
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: "32px",
        bgcolor: "background.paper",
        minHeight: 240,
      }}
    >
      <Stack spacing={2.5} sx={{ height: "100%" }}>
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            {testimonial.name}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14, mt: 0.5 }}>
            {testimonial.role}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 15,
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {testimonial.quote}
        </Typography>
        <Stack direction="row" spacing={0.25}>
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <StarRoundedIcon
              key={index}
              sx={{ color: "primary.main", fontSize: 22 }}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
