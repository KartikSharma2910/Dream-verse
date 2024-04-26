import { Box } from "@mui/material";
import styles from "./styles";

const DefaultHeader = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Dream Verse</Box>
      <Box component="img" src="/menu.png" sx={styles.image} />
    </Box>
  );
};

export default DefaultHeader;
