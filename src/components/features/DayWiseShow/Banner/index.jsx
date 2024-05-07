import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const Banner = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box
        component="img"
        src="/daywise.jpeg"
        alt="participants"
        sx={styles.image}
      />
      <Box sx={styles.overlay} />
    </Section>
  );
};

export default Banner;
