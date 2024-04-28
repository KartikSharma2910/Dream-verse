import { Box } from "@mui/material";
import { Timer } from "components/common";
import styles from "./styles";

const Banner = () => {
  return (
    <Box component="section">
      <Box component="img" src="/banner.jpeg" sx={styles.backgroundImage} />
      <Box sx={styles.overlay} />
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Where Dreams Meet Reality</Box>
        <Box sx={styles.description}>Join the Celebration of Creativity !</Box>
        <Box sx={styles.subDescription}>
          Where Dreams Meet Reality: Discover the Ultimate Creative Universe at
          Dreamverse
        </Box>
        <Timer />
        <Box sx={styles.bannerFooter}>Why Choose Dreamverse</Box>
      </Box>
    </Box>
  );
};

export default Banner;
