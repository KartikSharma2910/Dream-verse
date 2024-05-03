import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import { Timer } from "components/common";
import gsap from "gsap";
import styles from "./styles";

const Banner = () => {
  useGSAP(() => {
    gsap.from(".banner", {
      y: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/banner.jpeg" sx={styles.backgroundImage} />
      <Box sx={styles.overlay} />
      <Box className="banner" sx={styles.container}>
        <Box className="banner" sx={styles.heading}>
          Where Dreams Meet Reality
        </Box>
        <Box className="banner" sx={styles.description}>
          Join the Celebration of Creativity !
        </Box>
        <Box className="banner" sx={styles.subDescription}>
          Where Dreams Meet Reality: Discover the Ultimate Creative Universe at
          Dreamverse
        </Box>
        <Timer />
        <Box className="banner" sx={styles.bannerFooter}>
          Why Choose Dreamverse
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
