"use client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { blogCategoryLabels, type BlogPost } from "@/entities/blog";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

type BlogPostPageProps = {
  post: BlogPost;
};

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

export function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <PageShell>
      <PageHero title={post.title} description={post.description} />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack spacing={3}>
          <Box
            component={Link}
            href="/blog"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              width: "fit-content",
              "&:hover": { opacity: 0.85 },
            }}
          >
            <ArrowBackRoundedIcon fontSize="small" />
            К блогу
          </Box>

          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            {blogCategoryLabels[post.category]} · {formatDate(post.date)}
          </Typography>

          <Stack spacing={2.5}>
            {post.sections.map((section) => (
              <Box
                key={section.title}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "32px",
                  bgcolor: "background.paper",
                }}
              >
                <Stack spacing={1.5}>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 20 } }}>
                    {section.title}
                  </Typography>

                  {section.paragraphs.map((paragraph) => (
                    <Typography
                      key={paragraph}
                      sx={{
                        color: "text.secondary",
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {section.bullets.map((bullet) => (
                        <Typography
                          key={bullet}
                          component="li"
                          sx={{
                            color: "text.secondary",
                            fontSize: 15,
                            lineHeight: 1.7,
                            mb: 0.75,
                          }}
                        >
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </PageShell>
  );
}
