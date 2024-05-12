import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import Button from "components/common/Button";
import styles from "./styles";

const GlowCard = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/glowCard1.png" sx={styles.image} />
      <Box sx={styles.dataWrapper}>
        <Box sx={styles.container}>
          <Box sx={styles.heading}>Sarah Johnson</Box>
          <Box sx={styles.description}>Stand-up Comedian</Box>
        </Box>
        <Box sx={styles.text}>
          With a sharp wit and relatable humor, Sarah Johnson brings laughter to
          audiences with her hilarious stand-up routines.
        </Box>
        <Box sx={styles.buttonWrapper}>
          <Button
            as="GradientButton"
            label="Watch Sarah's Special"
            customStyles={styles.button}
          />
          <Box sx={styles.icons}>
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GlowCard;
