import { Box } from "@mui/material";
import styles from "./styles";

const FoodCard = ({ image, heading, description }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box>
        <Box component="img" src={image} sx={styles.dish} />
        <Box sx={styles.container}>
          <Box
            component="img"
            src="/stars.png"
            className="blinking-star"
            sx={styles.star}
          />
          <Box sx={styles.heading}>{heading}</Box>
          <Box sx={styles.description}>{description}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FoodCard;
