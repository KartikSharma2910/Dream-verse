import { Box } from "@mui/material";
import { Button, Card, InfoContainer, Section } from "components/common";
import { nominee, nomineeCards } from "constants/nominee";
import { useState } from "react";
import styles from "./styles";

const NomineeShowcase = () => {
  const [showcase, setShowcase] = useState("finance");

  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <InfoContainer
          label="Nominee Showcase"
          heading="Who's Up for Recognition?"
          description="Celebrating exceptional work"
          text="Join us as we embark on another exhilarating season of Dream Verse and witness the magic unfold before your eyes. Together, let's celebrate the dreams, the passion, and the extraordinary talent that define the essence of Indian creativity."
        />
        <Box sx={styles.locators}>
          {nominee.map(({ label, route }, index) => (
            <Box
              key={index}
              onClick={() => setShowcase(route)}
              sx={{
                ...styles.locator,
                backgroundImage:
                  showcase === route
                    ? "linear-gradient(to left, #F722C3, #8E4FFF)"
                    : "linear-gradient(to right, #D9D9D9, #66666E)",
              }}
            >
              #{label}
            </Box>
          ))}
        </Box>
        <Box sx={styles.divider} />
        <Box sx={styles.cardsWrapper}>
          {nomineeCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Box>
        <Box sx={styles.divider} />
        <Box sx={styles.buttonWrapper}>
          <Button label="View All" />
        </Box>
      </Box>
    </Section>
  );
};

export default NomineeShowcase;
