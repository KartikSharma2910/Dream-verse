import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const OurStory = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.heading}>Our Story</Box>
          <Box sx={styles.description}>
            Creative Nexus was founded in 2015 with a vision to revolutionize
            the way creators connect, collaborate, and showcase their talents to
            the world. What started as a passion project among friends has
            evolved into a dynamic platform that champions creativity and
            provides a stage for creators to shine. Over the years, we've
            overcome challenges, celebrated milestones, and grown our community
            to encompass diverse talents from around the globe.
          </Box>
        </Box>
        <Box sx={styles.boxer}>
          <Box sx={styles.gradientBox}>Our Mission</Box>
          <Box sx={styles.boxerDesc}>
            At Creative Nexus, our mission is to foster a vibrant and inclusive
            community where creators from all walks of life can thrive and
            unleash their full potential. We are committed to providing
            innovative tools, resources, and opportunities to empower creators
            and celebrate their creativity across various fields.
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.boxer,
            flexDirection: "row-reverse",
          }}
        >
          <Box sx={styles.gradientBox}>Our Vision</Box>
          <Box sx={styles.boxerDesc}>
            At Creative Nexus, our vision is to be the premier destination for
            creators, innovators, and dreamers worldwide. We envision a future
            where creativity knows no bounds, where individuals from every
            corner of the globe can come together to collaborate, inspire, and
            bring their visions to life. Through our platform,
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default OurStory;
