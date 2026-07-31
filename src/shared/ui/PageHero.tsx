"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ maxWidth: 720 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.25rem", md: "3.5rem" } }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
