import { Box } from "@mui/material";
import { Button, Section, VideoPlayer } from "components/common";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./styles";

const Awards = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <Box sx={styles.upperBoxOne}>
            <Box sx={styles.userImageWrapper}>
              <Box
                component="img"
                src="/eventThumblain.png"
                sx={styles.userImage}
              />
            </Box>
            <Box sx={styles.userTextWrapper}>
              <Box sx={styles.userName}>Riya Sharma</Box>
              <Box sx={styles.userPost}>travel enthusiasts</Box>
            </Box>
            <Box sx={styles.socialContainer}>
              <Box sx={styles.iconWrapper}>
                <YouTubeIcon />
              </Box>
              <Box sx={styles.iconWrapper}>
                <InstagramIcon />
              </Box>
              <Box sx={styles.iconWrapper}>
                <TwitterIcon />
              </Box>
            </Box>
            <Button
              as="GradientButton"
              label="Vote Now"
              customStyles={styles.button}
            />
          </Box>
          <Box sx={styles.upperBoxTwo}>
            <Box component="img" src="/video.png" sx={styles.videoImage} />
          </Box>
          <Box sx={styles.upperBoxThree}>
            <Box sx={styles.dataWrapper}>
              <Box sx={styles.dataHeading}>Bio</Box>
              <Box>
                Hi, I'm Riya! A passionate travel vlogger with a knack for
                storytelling and adventure. Join me as I explore the world one
                destination at a time.
              </Box>
            </Box>
            <Box sx={styles.dataLowerWrapper}>
              <Box sx={styles.dataLowerOne}>
                <Box
                  component="img"
                  src="/textBackground.png"
                  sx={styles.dataLowerImage}
                />
              </Box>
              <Box sx={styles.dataLowerTwo}>
                <Box>
                  <Box>Subscriber</Box>
                  <Box sx={styles.designText}>230641+</Box>
                </Box>
                <Box>
                  <Box>Watch hour</Box>
                  <Box sx={styles.designText}>980008+</Box>
                </Box>
              </Box>
            </Box>
          </Box>
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
