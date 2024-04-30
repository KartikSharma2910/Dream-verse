import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const NomineeCards = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Ranveer Ahluwalia</Box>
      <Box sx={styles.description}>
        CA turned content creator. Makes complex financial concepts easy to
        understand with humor.
      </Box>
      <Box component="img" src="/nominee1.png" sx={styles.image} />
    </Box>
  );
};

export default NomineeCards;
