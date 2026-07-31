"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { blogCategoryLabels, posts, type BlogPost } from "@/entities/blog";
import { PageHero } from "@/shared/ui";
import { PageShell } from "@/widgets/page-shell";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

const PostCard = ({ post }: { post: BlogPost }) => (
  <Box
    component={Link}
    href={`/blog/${post.slug}`}
    sx={{
      p: { xs: 3, md: 3.5 },
      borderRadius: "32px",
      bgcolor: "background.paper",
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      justifyContent: "space-between",
      gap: 2,
      textDecoration: "none",
      color: "inherit",
      transition: "transform 0.25s ease",
      "&:hover": { transform: "translateY(-2px)" },
    }}
  >
    <Stack spacing={1}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
        <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 600 }}>
          {blogCategoryLabels[post.category]}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
          {formatDate(post.date)}
        </Typography>
      </Stack>
      <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 22 } }}>
        {post.title}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.6 }}>
        {post.description}
      </Typography>
    </Stack>
    <Box
      sx={{
        alignSelf: { xs: "flex-start", sm: "center" },
        color: "primary.main",
        display: "grid",
        placeItems: "center",
      }}
    >
      <ArrowForwardRoundedIcon />
    </Box>
  </Box>
);

export function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <PageShell>
      <PageHero
        title="Блог"
        description="Кейсы, обновления продукта и заметки для брендов и исполнителей. How-to по экранам — в базе знаний."
      />
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 14 } }}>
        <Stack spacing={2}>
          {sorted.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </Stack>
      </Container>
    </PageShell>
  );
}
