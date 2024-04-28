import { Box } from "@mui/material";
import styles from "./styles";
import { Button, Timer } from "components/common";

const Banner = () => {
  return (
    <Box component="section">
      <Box component="img" src="/banner.jpeg" sx={styles.backgroundImage} />
      <Box sx={styles.overlay} />
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          position: "absolute",
          zIndex: 100,
        }}
      >
        <Box>Where Dreams Meet Reality </Box>
        <Box>Join the Celebration of Creativity !</Box>
        <Box>
          Where Dreams Meet Reality: Discover the Ultimate Creative Universe at
          Dreamverse
        </Box>
        <Timer />
        <Button as="GradientButton" label="My New Button" />
      </Box>
    </Box>
  );
};

export default Banner;
