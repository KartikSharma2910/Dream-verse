import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { meetTeam } from "constants/meetTeam";
import styles from "./styles";

const MeetTeam = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.heading}>Meet the Team</Box>
      <Box sx={styles.cardWrapper}>
        {meetTeam.map((item, index) => (
          <Card as="TeamCard" key={index} {...item} />
        ))}
      </Box>
    </Section>
  );
};

export default MeetTeam;
