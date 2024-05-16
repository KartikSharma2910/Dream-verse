import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { ourValues } from "constants/ourValues";
import styles from "./styles";

const OurValues = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.heading}>Our Values</Box>
      <Box sx={styles.cardWrapper}>
        {ourValues.map((item, index) => (
          <Box sx={styles.card}>
            <Card as="ValueCard" key={index} {...item} />
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default OurValues;
