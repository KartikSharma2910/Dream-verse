import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import { helpfulLinks, information } from "constants/footer";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.upperWrapper}>
        <Box sx={styles.box}>
          <Box sx={styles.brand}>Dream Verse</Box>
          <Box sx={styles.container}>
            <Box sx={styles.heading}>About Us</Box>
            <Box sx={styles.description}>
              Feel the raw passion! Dream Verse ignites where talent & emotion
              explode into Art.
            </Box>
          </Box>
          <Box sx={styles.container}>
            <Box sx={styles.contactUs}>Contact Us</Box>
            <Box sx={styles.description}>+91 9236504895</Box>
            <Box sx={styles.description}>info@shakethespear.com</Box>
          </Box>
        </Box>
        <Box sx={styles.informationBox}>
          <Box sx={styles.heading}>Information</Box>
          <Box sx={styles.linkers}>
            {information.map(({ label, link }, index) => (
              <Box key={index} component="a" href={link}>
                {label}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={styles.informationBox}>
          <Box sx={styles.heading}>Helpful Links</Box>
          <Box sx={styles.linkers}>
            {helpfulLinks.map(({ label, link }, index) => (
              <Box key={index} component="a" href={link}>
                {label}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={styles.informationBox}>Subscribe</Box>
      </Box>
      <Box sx={styles.divider} />
      <Box sx={styles.iconWrapper}>
        <FacebookIcon sx={styles.icon} />
        <TwitterIcon sx={styles.icon} />
        <InstagramIcon sx={styles.icon} />
        <YouTubeIcon sx={styles.icon} />
      </Box>
    </Box>
  );
};

export default Footer;
