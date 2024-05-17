import { Box } from "@mui/material";
import styles from "./styles";

const FormContainer = ({ heading, description, formHeading, children }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Box component="img" src="/contactUs.png" sx={styles.image} />
      </Box>
      <Box sx={styles.formWrapper}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
        <Box sx={styles.container}>
          <Box sx={styles.registerHeading}>{formHeading}</Box>
          <Box sx={styles.form}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormContainer;
