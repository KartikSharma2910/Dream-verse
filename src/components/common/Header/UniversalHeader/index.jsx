import { Box } from "@mui/material";
import Button from "components/common/Button";
import { header } from "constants/header";
import styles from "./styles";

const UniversalHeader = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Dream Verse</Box>
      <Box sx={styles.linkers}>
        {header.map(({ label, link }, index) => {
          return (
            <Box component="a" href={link} key={index}>
              {label}
            </Box>
          );
        })}
      </Box>
      <Button label="Buy Tickets" />
    </Box>
  );
};

export default UniversalHeader;
