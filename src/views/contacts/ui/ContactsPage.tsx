"use client";

import { useState, type FormEvent } from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { GradientButton, PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

const contacts = [
  { label: "Email", value: "hello@nikssens.com" },
  { label: "Телефон", value: "+7 (999) 000-00-00" },
  { label: "Для кого", value: "Бренды, агентства и исполнители" },
];

export function ContactsPage() {
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!consent) {
      setConsentError(true);
      return;
    }

    setConsentError(false);
  };

  return (
    <PageShell>
      <PageHero
        title="Контакты"
        description="Вопросы по платформе, Prime или онбордингу команды — ответим в течение одного рабочего дня."
      />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              {contacts.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    p: 3,
                    borderRadius: "32px",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 0.75 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 18 }}>{item.value}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "32px",
                bgcolor: "background.paper",
              }}
            >
              <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>Написать нам</Typography>
                <TextField label="Имя" name="name" fullWidth required />
                <TextField label="Email" name="email" type="email" fullWidth required />
                <TextField
                  label="Компания или роль"
                  name="company"
                  placeholder="Бренд / агентство / исполнитель"
                  fullWidth
                />
                <TextField
                  label="Сообщение"
                  name="message"
                  fullWidth
                  required
                  multiline
                  minRows={4}
                />

                <Box>
                  <FormControlLabel
                    sx={{ alignItems: "flex-start", mr: 0 }}
                    control={
                      <Checkbox
                        checked={consent}

                        color="primary"
                        sx={{ pt: 0.25 }}
                        onChange={(event) => {
                          setConsent(event.target.checked);
                          if (event.target.checked) {
                            setConsentError(false);
                          }
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: "text.secondary" }}>
                        Я соглашаюсь на{" "}
                        <Link
                          component={NextLink}
                          href="/legal/personal-data-consent"
                          underline="hover"
                          color="primary"
                        >
                          обработку персональных данных
                        </Link>{" "}
                        и принимаю{" "}
                        <Link
                          component={NextLink}
                          href="/legal/privacy-policy"
                          underline="hover"
                          color="primary"
                        >
                          Политику конфиденциальности
                        </Link>
                      </Typography>
                    }
                  />
                  {consentError && (
                    <FormHelperText error sx={{ mx: 0, mt: 0.5 }}>
                      Нужно согласие на обработку персональных данных
                    </FormHelperText>
                  )}
                </Box>

                <GradientButton
                  type="submit"
                  disabled={!consent}
                  sx={{ alignSelf: "flex-start" }}
                >
                  Отправить
                </GradientButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageShell>
  );
}
