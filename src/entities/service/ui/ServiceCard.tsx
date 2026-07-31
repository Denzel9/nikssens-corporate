"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import type { Service } from "../model/types";
import type { SxProps, Theme } from "@mui/material/styles";

const iconMap = {
  marketplace: StorefrontOutlinedIcon,
  applications: HowToRegOutlinedIcon,
  crm: ViewKanbanOutlinedIcon,
  collab: ForumOutlinedIcon,
  publications: CampaignOutlinedIcon,
  favorites: BookmarkBorderOutlinedIcon,
} as const;

type ServiceCardProps = {
  service: Service;
  sx?: SxProps<Theme>;
};

export function ServiceCard({ service, sx }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Box
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: "32px",
        bgcolor: "background.paper",
        color: "text.primary",
        border: "1px solid",
        borderColor: "rgba(255,255,255,0.08)",
        transition:
          "transform 0.25s ease, background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          bgcolor: "primary.main",
          borderColor: "primary.main",
          boxShadow: "0 16px 40px rgba(77, 144, 142, 0.28)",
          "& .service-card-icon": {
            bgcolor: "rgba(13, 13, 13, 0.14)",
            color: "text.primary",
          },
          "& .service-card-description": {
            color: "text.primary",
          },
        },
        ...sx,
      }}
    >
      <Stack spacing={2.5}>
        <Box
          className="service-card-icon"
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            bgcolor: "rgba(255, 255, 255, 0.08)",
            color: "primary.main",
            transition: "background-color 0.25s ease, color 0.25s ease",
          }}
        >
          <Icon fontSize="small" />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20 }}>
          {service.title}
        </Typography>
        <Typography
          className="service-card-description"
          sx={{
            color: "text.secondary",
            fontSize: 15,
            lineHeight: 1.65,
            transition: "color 0.25s ease",
          }}
        >
          {service.description}
        </Typography>
      </Stack>
    </Box>
  );
}
