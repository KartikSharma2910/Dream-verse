import { Box } from "@mui/material";
import { InfoContainer, Section } from "components/common";
import { nominee } from "constants/nominee";

const NomineeShowcase = () => {
  return (
    <Section>
      <InfoContainer
        label="Nominee Showcase"
        heading="Who's Up for Recognition?"
        description="Celebrating exceptional work"
        text="Join us as we embark on another exhilarating season of Dream Verse and witness the magic unfold before your eyes. Together, let's celebrate the dreams, the passion, and the extraordinary talent that define the essence of Indian creativity."
      />
      <Box>
        <Box>
          {nominee.map(({ label, route }, index) => {
            return <Box key={index}>{label}</Box>;
          })}
        </Box>
      </Box>
    </Section>
  );
};

export default NomineeShowcase;
