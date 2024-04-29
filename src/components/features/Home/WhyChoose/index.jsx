import { Box } from "@mui/material";
import { InfoContainer, Section } from "components/common";
import styles from "./styles";
import "./styles.css";

const WhyChoose = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.main}>
        {/* <Box sx={styles.glowBox}>
          <Box class="animated-border-box-glow"></Box>
          <Box class="animated-border-box">
            <Box sx={styles.insiderData}>
              <Box component="img" src="/rombusImage1.png" sx={styles.image} />
              <Box sx={styles.glowBoxText}>Engaging Events</Box>
            </Box>
            <Box sx={styles.insiderData}>
              <Box component="img" src="/rohmbusImage2.png" sx={styles.image} />
              <Box sx={styles.glowBoxText}>Diverse Content Categories</Box>
            </Box>
            <Box sx={styles.insiderData}>
              <Box component="img" src="/rohmbusImage3.png" sx={styles.image} />
              <Box sx={styles.glowBoxText}>Community Interaction</Box>
            </Box>
          </Box>
        </Box> */}
        <Box sx={styles.dataWrapper}>
          <InfoContainer
            customStyles={styles.infoContainer}
            label="Dreams come to life and creativity knows no bounds."
            heading="Welcome to Dream Verse"
            description="The ultimate celebration of creativity and talent in India! 🎬"
            text="Dream Verse is more than just a reality show; it's a platform dedicated to honoring the exceptional skills and boundless imagination of Indian creators across various fields. From Finance to Vines, Comedy to Mimicry, Explainers to Critics, we recognize and celebrate the diverse spectrum of talent that enriches our cultural landscape.
          At Dream Verse, we believe that every creator deserves recognition for their dedication, innovation, and impact. That's why we bring together the best and brightest minds in the industry to showcase their talents and inspire the next generation of creators."
            buttonLabel="Apply Today"
          />
          <Box sx={styles.numberWrapper}>
            <Box>
              <Box sx={styles.number}>20+</Box>
              <Box sx={styles.numberText}>Categories</Box>
            </Box>
            <Box>
              <Box sx={styles.number}>120+</Box>
              <Box sx={styles.numberText}>Goodies</Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.posterWrapper}>
          <Box sx={styles.posterContainer}>
            <Box
              component="img"
              src="/awards.jpeg"
              sx={{ ...styles.posterImage, borderRadius: "0px 0px 80px 0px" }}
            />
            <Box sx={styles.posterText}>Awards</Box>
          </Box>
          <Box sx={styles.posterContainer}>
            <Box
              component="img"
              src="/tickets.jpeg"
              sx={{ ...styles.posterImage, borderRadius: "80px 0px 0px 0px" }}
            />
            <Box sx={styles.posterText}>Ticket</Box>
          </Box>
          <Box sx={styles.posterContainer}>
            <Box
              component="img"
              src="/sponser.jpeg"
              sx={{ ...styles.posterImage, borderRadius: "0px 0px 80px 0px" }}
            />
            <Box sx={styles.posterText}>Sponsors</Box>
          </Box>
          <Box sx={styles.posterContainer}>
            <Box
              component="img"
              src="/partners.jpeg"
              sx={{ ...styles.posterImage, borderRadius: "80px 0px 0px 0px" }}
            />
            <Box sx={styles.posterText}>Partners</Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default WhyChoose;
