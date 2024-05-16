import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import styles from "./styles";

const TeamCard = ({ backgroundColor, image, userName }) => {
  return (
    <Box sx={{ ...styles.wrapper, backgroundColor }}>
      <Box component="img" src={image} sx={styles.image} />
      <Box sx={styles.dataBox}>
        <Box sx={styles.user}>{userName}</Box>
        <LinkedInIcon />
      </Box>
    </Box>
  );
};

export default TeamCard;
