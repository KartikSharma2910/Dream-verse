import { Box } from "@mui/material";
import styles from "./styles";

const NomineeCards = ({ label, heading, text, image, background }) => {
  return (
    <Box sx={{ ...styles.wrapper, backgroundColor: background }}>
      <Box sx={styles.heading}>{heading}</Box>
      <Box sx={styles.description}>{text}</Box>
      <Box component="img" src={image} sx={styles.image} />
      <Box sx={styles.label}>{label}</Box>
    </Box>
  );
};

export default NomineeCards;
