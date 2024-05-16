import { Box } from "@mui/material";
import styles from "./styles";

const ValueCard = ({ image, heading, description }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src={image} sx={styles.image} />
      <Box sx={styles.heading}>{heading}</Box>
      <Box sx={styles.description}>{description}</Box>
    </Box>
  );
};

export default ValueCard;
