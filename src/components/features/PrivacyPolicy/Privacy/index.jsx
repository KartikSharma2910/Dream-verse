import { Box } from "@mui/material";
import { Section } from "components/common";
import { termsAndConditions } from "constants/termsAndConditions";
import styles from "./styles";

const Privacy = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.heading}>Privacy Policy</Box>
          <Box>Empower Your Favorites, Shape the Show</Box>
        </Box>
        <Box sx={styles.conditionWrapper}>
          {termsAndConditions.map(({ label, value }, index) => (
            <Box sx={styles.conditions} key={index}>
              <Box sx={styles.label}>{label}</Box>
              <Box sx={styles.value}>{value}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default Privacy;
