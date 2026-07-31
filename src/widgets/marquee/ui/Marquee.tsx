"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const phrases = [
  "Поиск → отклик → задача → публикация",
  "Один контур вместо чатов и таблиц",
  "Прозрачные статусы для бренда и исполнительа",
  "Контроль сроков и «что горит»",
];

function MarqueeTrack() {
  return (
    <Stack direction="row" spacing={4} sx={{ alignItems: "center", pr: 4 }}>
      {phrases.map((phrase) => (
        <Stack key={phrase} direction="row" spacing={4} sx={{ alignItems: "center" }}>
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: { xs: 14, md: 16 },
              whiteSpace: "nowrap",
            }}
          >
            {phrase}
          </Typography>
          <Image src="/icon.png" alt="" width={20} height={20} />
        </Stack>
      ))}
    </Stack>
  );
}

export function Marquee() {
  return (
    <Box
      component="section"
      aria-hidden
      sx={{
        py: 2.5,
        bgcolor: "#111111",
        borderY: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        mb: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marqueeScroll 28s linear infinite",
        }}
      >
        <MarqueeTrack />
        <MarqueeTrack />
      </Box>
    </Box>
  );
}
