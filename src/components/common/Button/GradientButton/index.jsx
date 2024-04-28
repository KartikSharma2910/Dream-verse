import { Button } from "@mui/material";
import styles from "./styles";
import "./styles.css";

const GradientButton = ({
  label,
  variant = "contained",
  customStyles,
  ...rest
}) => {
  return (
    <Button
      className="custom-button"
      sx={{ ...styles.wrapper, ...customStyles }}
      variant={variant}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default GradientButton;
