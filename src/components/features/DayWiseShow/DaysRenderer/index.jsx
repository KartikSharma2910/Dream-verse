import { Box } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Button, Section } from "components/common";
import { daysRenderer } from "constants/daysRenderer";
import { useState } from "react";

const DaysRenderer = () => {
  const [idx, setIdx] = useState(0);

  return (
    <Section
      customStyles={{
        height: "min-content",
      }}
    >
      <Box>
        <Box>#Day 0{idx + 1}</Box>
        {daysRenderer.map(
          (
            { label, headingOne, descriptionOne, headingTwo, descriptionTwo },
            index
          ) => (
            <Box
              key={index}
              sx={{
                display: idx !== index ? "none" : "flex",
                flexDirection: "column",
                gap: "3rem",
                border: "1px solid white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button label="Previous" />
                <Box
                  sx={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "transparent",
                    backgroundClip: "text",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    backgroundImage:
                      "linear-gradient(to right, #F3CB85 100%, #AB7642 100%)",
                  }}
                >
                  {label}
                </Box>
                <Button
                  label={`Day 0${index + 2}`}
                  endIcon={<EastIcon />}
                  onClick={() => setIdx((prev) => prev + 1)}
                />
              </Box>
              <Box>
                <Box>{headingOne}</Box>
                <Box>{descriptionOne}</Box>
              </Box>
              <Box>
                <Box>{headingTwo}</Box>
                <Box>{descriptionTwo}</Box>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Section>
  );
};

export default DaysRenderer;
