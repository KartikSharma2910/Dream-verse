import { Box } from "@mui/material";
import { Button, Section } from "components/common";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const ErrorScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, [navigate]);

  return (
    <Section>
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>Oops! You've stumbled upon a lost page!</Box>
        <Box sx={styles.description}>
          Use the back button on your browser to return to the previous
          page.Take this opportunity to explore other areas of our website. Who
          knows, you might discover something even more exciting!
        </Box>
        <Box component="img" src="/error.png" sx={styles.image} />
        <Button
          as="GradientButton"
          label="Back To Home"
          onClick={() => navigate("/")}
          customStyles={styles.button}
        />
      </Box>
    </Section>
  );
};

export default ErrorScreen;
