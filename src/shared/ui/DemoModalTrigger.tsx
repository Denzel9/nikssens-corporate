"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import {
  DEMO_VIDEO_DESCRIPTION,
  DEMO_VIDEO_ID,
  DEMO_VIDEO_TITLE,
  DEMO_WALKTHROUGH_STEPS,
} from "@/shared/config/demo";
import { authLink } from "@/shared/config";
import { GradientButton } from "./GradientButton";
import { OutlinedPillButton } from "./OutlinedPillButton";

type DemoModalTriggerProps = {
  label?: string;
  fullWidth?: boolean;
};

export function DemoModalTrigger({
  label = "Смотреть демо",
  fullWidth,
}: DemoModalTriggerProps) {
  const [open, setOpen] = useState(false);
  const hasVideo = Boolean(DEMO_VIDEO_ID);

  return (
    <>
      <OutlinedPillButton
        onClick={() => setOpen(true)}
        startIcon={<PlayArrowRoundedIcon />}
        sx={{ width: fullWidth ? { xs: "100%", sm: "auto" } : undefined }}
      >
        {label}
      </OutlinedPillButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              bgcolor: "#121212",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              overflow: "hidden",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 1.5,
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
              {DEMO_VIDEO_TITLE}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
              {DEMO_VIDEO_DESCRIPTION}
            </Typography>
          </Box>
          <IconButton
            aria-label="Закрыть"
            onClick={() => setOpen(false)}
            sx={{ color: "text.secondary" }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        {hasVideo ? (
          <Box sx={{ position: "relative", width: "100%", pt: "56.25%", bgcolor: "#000" }}>
            <Box
              component="iframe"
              src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0`}
              title={DEMO_VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: "absolute",
                inset: 0,
                border: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ) : (
          <Box sx={{ p: { xs: 3, md: 4 } }}>
            <Typography sx={{ color: "text.secondary", fontSize: 15, mb: 2.5, lineHeight: 1.7 }}>
              Видео скоро появится. Пока — сценарий обзора продукта:
            </Typography>
            <Stack spacing={1.25} sx={{ mb: 3 }}>
              {DEMO_WALKTHROUGH_STEPS.map((step, index) => (
                <Stack key={step} direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }}>{step}</Typography>
                </Stack>
              ))}
            </Stack>
            <GradientButton href={authLink.href}>Открыть приложение</GradientButton>
          </Box>
        )}
      </Dialog>
    </>
  );
}
