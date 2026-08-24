"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/shared/ui";

const platforms = [
  "Instagram",
  "YouTube",
  "TikTok",
  "Telegram",
  "VK",
  "Twitch",
  "LinkedIn",
  "или любые другие",
];

export function IntegrationsSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Платформы в объявлении"
          description="В брифе указываете, рамки сотрудничества: формат, бюджет и площадки — исполнитель сразу видит требования."
        />
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: 1.25,
          }}
        >
          {platforms.map((platform) => (
            <Box
              key={platform}
              sx={{
                px: 2.25,
                py: 1.25,
                borderRadius: 999,
                bgcolor: "background.paper",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{platform}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
