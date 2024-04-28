import { Box } from "@mui/material";
import styles from "./styles";
import "./styles.css";

const WhyChoose = () => {
  return (
    <Box component="section">
      <Box sx={styles.glowBox}>
        <Box class="animated-border-box-glow"></Box>
        <Box class="animated-border-box">
          <Box>
            <Box
              component="img"
              src="/rombusImage1.png"
              sx={{
                width: "120px",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
            <Box>Engaging Events</Box>
          </Box>
          <Box>
            <Box
              component="img"
              src="/rohmbusImage2.png"
              sx={{
                width: "120px",
                objectFit: "cover",
              }}
            />
            <Box>Diverse Content Categories</Box>
          </Box>
          <Box>
            <Box
              component="img"
              src="/rohmbusImage3.png"
              sx={{
                width: "120px",
                objectFit: "cover",
              }}
            />
            <Box>Community Interaction</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChoose;
