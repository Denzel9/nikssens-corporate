"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SectionHeading } from "@/shared/ui";
import { FAQS } from "../model/constants";

export function FaqSection() {

  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="FAQ"
          description="Короткие ответы про продукт, Prime, роли и безопасность."
        />
        {FAQS.map((item) => (
          <Accordion
            key={item.q}

            disableGutters
            elevation={0}
            sx={{
              mb: 1.5,
              overflow: "hidden",
              bgcolor: "background.paper",
              borderRadius: "24px !important",
              "&::before": { display: "none" },
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary", py: 3.5 }} />}>
              <Typography sx={{ fontSize: 16, pr: 2 }}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "text.secondary", fontSize: 15, lineHeight: 1.7 }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
