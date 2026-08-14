"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { legalLinks } from "@/entities/legal";
import { authLink, brand, navLinks, socialLinks } from "@/shared/config";
import { Logo, SocialIcon } from "@/shared/ui";

const contactItems = [
  { label: "Email", value: "hello@nikssens.com", href: "mailto:hello@nikssens.com" },
  { label: "Телефон", value: "+7 (999) 000-00-00", href: "tel:+79990000000" },
] as const;

const footerLinkSx = {
  fontSize: 15,
  "&:hover": { color: "primary.main" },
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: { xs: 4, md: 6 },
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: 320 }}>
            <Logo />
            <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.7 }}>
              {brand.tagline}
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ pt: 0.5 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.id}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,0.12)",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <SocialIcon id={social.id} />
                </IconButton>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={1.5} sx={{ minWidth: 140 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.5 }}>
              Навигация
            </Typography>
            <Link
              component={NextLink}
              href="/"
              underline="none"
              color="text.secondary"
              sx={footerLinkSx}
            >
              Главная
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                component={NextLink}
                href={link.href}
                underline="none"
                color="text.secondary"
                sx={footerLinkSx}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={authLink.href}
              underline="none"
              color="text.secondary"
              sx={footerLinkSx}
            >
              {authLink.label}
            </Link>
          </Stack>

          <Stack spacing={1.5} sx={{ minWidth: 200, maxWidth: 280 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.5 }}>
              Документы
            </Typography>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                component={NextLink}
                href={link.href}
                underline="none"
                color="text.secondary"
                sx={footerLinkSx}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1.5} sx={{ minWidth: 180 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.5 }}>
              Контакты
            </Typography>
            {contactItems.map((item) => (
              <Box key={item.label}>
                <Typography sx={{ color: "text.secondary", fontSize: 13, mb: 0.25 }}>
                  {item.label}
                </Typography>
                <Link
                  href={item.href}
                  underline="none"
                  color="text.primary"
                  sx={{ fontSize: 15, fontWeight: 500, "&:hover": { color: "primary.main" } }}
                >
                  {item.value}
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "divider", mb: 3 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
            © {year} {brand.name}. Все права защищены.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2.5 }}
            sx={{ flexWrap: "wrap" }}
          >
            <Link
              component={NextLink}
              href="/legal/privacy-policy"
              underline="none"
              color="text.secondary"
              sx={{ fontSize: 13, "&:hover": { color: "primary.main" } }}
            >
              Конфиденциальность
            </Link>
            <Link
              component={NextLink}
              href="/legal/user-agreement"
              underline="none"
              color="text.secondary"
              sx={{ fontSize: 13, "&:hover": { color: "primary.main" } }}
            >
              Соглашение
            </Link>
            <Link
              component={NextLink}
              href="/contacts"
              underline="none"
              color="text.secondary"
              sx={{ fontSize: 13, "&:hover": { color: "primary.main" } }}
            >
              Связаться с нами
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
