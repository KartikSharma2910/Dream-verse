import { Box } from "@mui/material";
import styles from "./styles";

const DreamCards = ({
  day = 1,
  heading,
  headingOne,
  descOne,
  headingTwo,
  descTwo,
  customStyles,
}) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box component="img" src="/ribbon.png" sx={styles.image} />
      <Box sx={styles.day}>#Day 0{day}</Box>
      <Box sx={styles.heading}>{heading}</Box>
      <Box sx={styles.dataWrapper}>
        <Box sx={styles.dataHeading}>{headingOne}</Box>
        <Box sx={styles.dataDescription}>{descOne}</Box>
      </Box>
      <Box sx={styles.dataWrapper}>
        <Box sx={styles.dataHeading}>{headingTwo}</Box>
        <Box sx={styles.dataDescription}>{descTwo}</Box>
      </Box>
    </Box>
  );
};

export default DreamCards;
