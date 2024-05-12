import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Section } from "components/common";
import { useState } from "react";
import styles from "./styles";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faq = [
    {
      heading:
        "What types of content creators is NovaLens Studios suitable for?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading: "Can I bring my own equipment to the studio?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading:
        "Are there any additional services available at NovaLens Studios?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading: "How do I book a studio session at NovaLens Studios?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
    {
      heading: "Can I tour the studio before booking?",
      description:
        "NovaLens Studios caters to a wide range of content creators, including photographers, videographers, filmmakers, bloggers, influencers, and more. Our versatile studio space and comprehensive services are designed to meet the needs of creatives from various industries and backgrounds.",
    },
  ];

  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.faqWrapper}>
        <Box sx={styles.heading}>Your Dream Verse Questions Answered</Box>
        <Box sx={styles.description}>
          Everything You Need to Know About Dream Verse
        </Box>
        <Box sx={styles.accordianContainer}>
          {faq.map(({ heading, description }, index) => {
            return (
              <Accordion
                square
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <Box sx={styles.accordianIcon}>
                      {expanded === `panel${index}` ? (
                        <RemoveIcon sx={styles.icon} />
                      ) : (
                        <AddIcon sx={styles.icon} />
                      )}
                    </Box>
                  }
                >
                  <Box sx={styles.accordianText}>{heading}</Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={styles.accordianDescription}>{description}</Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
};

export default FAQ;
