import { Box } from "@mui/material";
import Button from "components/common/Button";
import styles from "./styles";

const VoteCard = ({ image, name, text }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src={image} sx={styles.image} />
      <Box sx={styles.container}>
        <Box sx={styles.name}>{name}</Box>
        <Box sx={styles.text}>{text}</Box>
        <Button
          as="GradientButton"
          label="Vote Now"
          customStyles={styles.button}
        />
      </Box>
    </Box>
  );
};

export default VoteCard;
