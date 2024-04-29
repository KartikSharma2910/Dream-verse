import { Box } from "@mui/material";
import Button from "../Button";
import styles from "./styles";

const InfoContainer = ({
  label,
  heading,
  description,
  text,
  buttonLabel,
  customStyles,
}) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box sx={styles.label}>{label}</Box>
      <Box>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
      </Box>
      <Box sx={styles.text}>{text}</Box>
      {buttonLabel && (
        <Button label={buttonLabel} customStyles={styles.button} />
      )}
    </Box>
  );
};

export default InfoContainer;
