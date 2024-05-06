import { Box } from "@mui/material";
import { Section } from "components/common";
import { eventPlanner } from "constants/eventPlanner";
import styles from "./styles";

const EventPlanner = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Event Made Possible By</Box>
        <Box sx={styles.description}>Our Generous Sponsors</Box>
        <Box sx={styles.sponserWrapper}>
          {eventPlanner.map((event, index) => (
            <Box sx={styles.sponser}>
              <Box key={index} component="img" src={event} sx={styles.image} />
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default EventPlanner;
