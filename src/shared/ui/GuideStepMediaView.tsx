"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { GuideMockVariant, GuideStepMedia } from "@/entities/guide";

const BrowserChrome = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      borderRadius: "20px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      bgcolor: "#0F0F0F",
    }}
  >
    <Stack
      direction="row"
      spacing={1}
      sx={{
        px: 2,
        py: 1.25,
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        bgcolor: "#171717",
      }}
    >
      {["#FF5F57", "#FEBC2E", "#28C840"].map((color) => (
        <Box
          key={color}
          sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color }}
        />
      ))}
      <Box
        sx={{
          ml: 1.5,
          flex: 1,
          height: 22,
          borderRadius: 999,
          bgcolor: "rgba(255,255,255,0.06)",
          px: 1.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 11, color: "text.secondary" }}>
          app.nikssens.com
        </Typography>
      </Box>
    </Stack>
    <Box sx={{ p: { xs: 1.5, md: 2 }, minHeight: { xs: 200, md: 260 } }}>{children}</Box>
  </Box>
);

const MockRows = ({
  title,
  rows,
}: {
  title: string;
  rows: string[];
}) => (
  <Box>
    <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1.25 }}>{title}</Typography>
    <Stack spacing={1}>
      {rows.map((row) => (
        <Box
          key={row}
          sx={{
            p: 1.5,
            borderRadius: "14px",
            bgcolor: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.06)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {row}
        </Box>
      ))}
    </Stack>
  </Box>
);

const mockContent: Record<GuideMockVariant, React.ReactNode> = {
  feed: (
    <MockRows
      title="Лента объявлений"
      rows={[
        "Reels для запуска линейки · Instagram",
        "UGC-обзор продукта · бюджет фикс",
        "Интеграция в Stories · удалённо",
      ]}
    />
  ),
  "create-post": (
    <MockRows
      title="Новое объявление"
      rows={[
        "Заголовок и описание брифа",
        "Площадка · формат · бюджет",
        "Дедлайн и требования к исполнителю",
      ]}
    />
  ),
  responses: (
    <MockRows
      title="Отклики"
      rows={[
        "Дмитрий К. · Новый · 120k",
        "Игорь П. · Просмотрен",
        "Алина С. · Принят → задача",
      ]}
    />
  ),
  crm: (
    <MockRows
      title="CRM · что требует действия"
      rows={["Ждут действия · 3", "В работе · 5", "На проверке · 2"]}
    />
  ),
  task: (
    <MockRows
      title="Задача"
      rows={[
        "Статус: В работе · Срочно",
        "Бриф согласован",
        "Черновик на проверке",
      ]}
    />
  ),
  chat: (
    <MockRows
      title="Чат по задаче"
      rows={[
        "Бренд: уточните музыку в Reels",
        "Исполнитель: черновик во вложении",
        "Бренд: принято, публикуем",
      ]}
    />
  ),
  profile: (
    <MockRows
      title="Профиль"
      rows={[
        "Название / имя и ниши",
        "Контакты и описание",
        "Email подтверждён",
      ]}
    />
  ),
};

type GuideStepMediaViewProps = {
  media: GuideStepMedia;
  caption?: string;
};

export function GuideStepMediaView({ media, caption }: GuideStepMediaViewProps) {
  return (
    <Box>
      {media.type === "video" ? (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            pt: "56.25%",
            borderRadius: "20px",
            overflow: "hidden",
            bgcolor: "#000",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${media.youtubeId}?rel=0`}
            title={caption ?? "Видео шага"}
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
      ) : media.type === "image" ? (
        <BrowserChrome>
          <Box
            component="img"
            src={media.src}
            alt={media.alt}
            sx={{
              width: "100%",
              display: "block",
              borderRadius: "12px",
              objectFit: "cover",
              maxHeight: 360,
            }}
          />
        </BrowserChrome>
      ) : (
        <BrowserChrome>{mockContent[media.variant]}</BrowserChrome>
      )}

      {caption && (
        <Typography sx={{ mt: 1.25, color: "text.secondary", fontSize: 13 }}>
          {caption}
        </Typography>
      )}

      {media.type === "mock" && (
        <Typography sx={{ mt: 0.5, color: "text.secondary", fontSize: 12, opacity: 0.8 }}>
          Плейсхолдер экрана — замените на скрин или видео, когда кадры будут готовы.
        </Typography>
      )}
    </Box>
  );
}
