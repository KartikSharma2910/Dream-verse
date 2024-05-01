import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./styles";

const DefaultHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ ...styles.wrapper, display: isScrolled ? "none" : "flex" }}>
      <Box sx={styles.heading}>Dream Verse</Box>
      {/* <Box component="img" src="/logo.png" sx={styles.logo} /> */}
      <Box component="img" src="/menu.png" sx={styles.image} />
    </Box>
  );
};

export default DefaultHeader;
