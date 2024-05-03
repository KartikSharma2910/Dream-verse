import { Box } from "@mui/material";
import { InfoContainer, Section } from "components/common";
import { days as Days } from "constants/dreamScape";
import { useState } from "react";
import styles from "./styles";

const UnleashDream = () => {
  const [days, setDays] = useState("day1");
  return (
    <Section sx={styles.wrapper}>
      <Box sx={styles.container}>
        <InfoContainer
          label="Unleash Your Dreamscape"
          heading="A Dreamverse Daily Experience"
          description="Dive into a week of electrifying music, side-splitting comedy, global flavors, and creative exploration at Dreamverse!"
        />
        <Box>
          <Box sx={styles.locators}>
            {Days.map(({ label, route }, index) => (
              <Box
                key={index}
                onClick={() => setDays(route)}
                sx={{
                  ...styles.locator,
                  backgroundImage:
                    days === route
                      ? "linear-gradient(to left, #F722C3, #8E4FFF)"
                      : "linear-gradient(to right, #D9D9D9, #66666E)",
                }}
              >
                #{label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default UnleashDream;
