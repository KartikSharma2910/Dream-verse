import { Box } from "@mui/material";
import styles from "./styles";

const Section = ({ children, customStyles }) => {
  return (
    <Box component="section" sx={{ ...styles.wrapper, ...customStyles }}>
      <Box component="img" src="/background.png" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.kid}>{children}</Box>
    </Box>
  );
};

export default Section;
