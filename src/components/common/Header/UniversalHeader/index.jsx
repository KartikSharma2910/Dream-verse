import { Box } from "@mui/material";
import Button from "components/common/Button";
import { header } from "constants/header";
import { useEffect, useState } from "react";
import styles from "./styles";

const UniversalHeader = () => {
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
      <Box sx={styles.linkers}>
        {header.map(({ label, link }, index) => {
          return (
            <Box component="a" href={link} key={index}>
              {label}
            </Box>
          );
        })}
      </Box>
      <Button label="Buy Tickets" />
    </Box>
  );
};

export default UniversalHeader;
