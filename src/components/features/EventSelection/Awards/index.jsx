import { Box } from "@mui/material";
import { Button, Section, VideoPlayer } from "components/common";
import styles from "./styles";

const Awards = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <Box
            sx={{
              width: "33%",
              height: "100%",
              border: "1px solid red",
              background: "#06060E66",
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            >
              <Box
                component="img"
                src="/eventThumblain.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Box>Riya Sharma</Box>
              <Box>travel enthusiasts</Box>
            </Box>
            <Button as="GradientButton" label="Vote Now" />
          </Box>
          <Box
            sx={{
              width: "33%",
              height: "100%",
            }}
          >
            <VideoPlayer
              thumbnail="/eventThumblain.png"
              src="https://www.taxmann.com/emailer/images/FEMA.mp4"
            />
          </Box>
          <Box
            sx={{
              width: "33%",
              height: "100%",
              border: "1px solid green",
            }}
          ></Box>
        </Box>
        <Box sx={styles.box}>
          <Box
            sx={{
              width: "73%",
              height: "100%",
              border: "1px solid pink",
            }}
          ></Box>
          <Box
            sx={{
              width: "26%",
              height: "100%",
              border: "1px solid yellow",
            }}
          ></Box>
        </Box>
        <Box sx={{ ...styles.box, flexDirection: "row-reverse" }}>
          <Box
            sx={{
              width: "73%",
              height: "100%",
              border: "1px solid pink",
            }}
          ></Box>
          <Box
            sx={{
              width: "26%",
              height: "100%",
              border: "1px solid yellow",
            }}
          ></Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Awards;
