"use client";

import { useState } from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { authLink, navLinks } from "@/shared/config";
import { GradientButton, Logo } from "@/shared/ui";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(13, 13, 13, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 72, md: 88 },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Logo priority />

            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { xs: "none", md: "flex" },
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  underline="none"
                  color="text.primary"
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    opacity: 0.9,
                    "&:hover": { opacity: 1, color: "primary.main" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <GradientButton
                href={authLink.href}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  px: { xs: 2.5, md: 3 },
                  py: 1,
                  fontSize: 14,
                }}
              >
                {authLink.label}
              </GradientButton>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setOpen(true)}
                sx={{ display: { md: "none" } }}
                aria-label="Открыть меню"
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "min(100%, 320px)",
              bgcolor: "background.default",
              p: 2,
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Logo />
          <IconButton onClick={() => setOpen(false)} aria-label="Закрыть меню">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              component={NextLink}
              href={link.href}
              underline="none"
              color="text.primary"
              onClick={() => setOpen(false)}
              sx={{ fontSize: 18, fontWeight: 600, py: 1 }}
            >
              {link.label}
            </Link>
          ))}
          <Box sx={{ pt: 1 }}>
            <GradientButton href={authLink.href} fullWidth onClick={() => setOpen(false)}>
              {authLink.label}
            </GradientButton>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
