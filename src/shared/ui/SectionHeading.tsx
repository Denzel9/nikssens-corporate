"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type SectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ title, description, id }: SectionHeadingProps) {
  return (
    <Box id={id} sx={{ mb: description ? { xs: 3, md: 5 } : { xs: 3, md: 4 } }}>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: description ? { xs: 2, md: 2.5 } : 0 }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.7,
            maxWidth: 680,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
