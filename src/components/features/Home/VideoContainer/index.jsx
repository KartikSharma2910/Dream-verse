import { Box } from "@mui/material";
import { Section, VideoPlayer } from "components/common";
import styles from "./styles";

const VideoContainer = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.videoContainer}>
        <VideoPlayer
          name="Dream Verse"
          src="https://www.taxmann.com/emailer/images/FEMA.mp4"
        />
      </Box>
    </Section>
  );
};

export default VideoContainer;
