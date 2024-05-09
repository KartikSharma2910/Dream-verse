import EastIcon from "@mui/icons-material/East";
import { Box } from "@mui/material";
import { Button, Section } from "components/common";
import { daysRenderer } from "constants/daysRenderer";
import { useState } from "react";
import styles from "./styles";

const DaysRenderer = () => {
  const [idx, setIdx] = useState(0);

  const handleNext = () => {
    if (idx < 6) {
      setIdx(idx + 1);
    }
  };

  const handlePrevious = () => {
    if (idx > 0) {
      setIdx(idx - 1);
    }
  };

  return (
    <Section customStyles={styles.wrapper}>
      <Box>
        <Box sx={styles.dayWrap}>
          <Box component="span" sx={styles.containerDay}>
            #Day 0{idx + 1}
          </Box>
        </Box>
        {daysRenderer.map(
          (
            { label, headingOne, descriptionOne, headingTwo, descriptionTwo },
            index
          ) => (
            <Box
              key={index}
              sx={{
                display: idx !== index ? "none" : "flex",
                ...styles.dataRenderer,
              }}
            >
              <Box sx={styles.headerBox}>
                <Button label="Previous" onClick={handlePrevious} />
                <Box component="span" sx={styles.heading}>
                  {label}
                </Box>
                <Button
                  label={`Day 0${index + 2}`}
                  endIcon={<EastIcon />}
                  onClick={handleNext}
                />
              </Box>
              <Box sx={styles.dataBox}>
                <Box sx={styles.dataHeading}>{headingOne}</Box>
                <Box sx={styles.dataDesc}>{descriptionOne}</Box>
              </Box>
              <Box sx={styles.dataBox}>
                <Box sx={styles.dataHeading}>{headingTwo}</Box>
                <Box sx={styles.dataDesc}>{descriptionTwo}</Box>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Section>
  );
};

export default DaysRenderer;
