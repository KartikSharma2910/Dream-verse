import { Box } from "@mui/material";
import { Section } from "components/common";

const Map = () => {
  return (
    <Section
      customStyles={{
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/map.png"
        sx={{
          height: "200px",
          position: "absolute",
          left: 0,
          right: 0,
        }}
      />
    </Section>
  );
};

export default Map;
