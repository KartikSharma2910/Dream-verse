import { Box } from "@mui/material";
import { Button, Section, VideoPlayer } from "components/common";
import MaleIcon from "@mui/icons-material/Male";
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
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "65%",
              padding: "2%",
              borderRadius: "12px",
              backgroundColor: "#06060E66",
              height: "100%",
              border: "1px solid #999999",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Background
            </Box>
            <Box
              sx={{
                fontSize: "14px",
              }}
            >
              From a young age, I've been captivated by the beauty of the world
              and the diversity of cultures. Inspired by my love for travel and
              storytelling, I embarked on a journey to share my experiences with
              the world. Despite facing initial challenges, I persevered and
              built a dedicated community of travel enthusiasts who share my
              passion for exploration.From a young age, I've been captivated by
              the beauty of the world and the diversity of cultures. Inspired by
              my love for travel and storytelling, I embarked on a journey to
              share my experiences with the world. Despite facing initial
              challenges, I persevered and built a dedicated community of travel
              enthusiasts who share my passion for exploration.
            </Box>
          </Box>
          <Box
            sx={{
              width: "35%",
              height: "100%",
              padding: "2%",
              borderRadius: "12px",
              backgroundColor: "#06060E66",
              height: "100%",
              border: "1px solid #999999",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Gender Demographics
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src="/male.png"
                    sx={{
                      width: "200px",
                    }}
                  />
                  <MaleIcon
                    sx={{
                      fontSize: "100px",
                      color: "black",
                      left: 50,
                      bottom: 60,
                      position: "absolute",
                    }}
                  />
                </Box>

                <Box>
                  <Box
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    82%
                  </Box>
                  <Box>Male Audience</Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    82%
                  </Box>
                  <Box>Female Audience</Box>
                </Box>
                <Box component="img" src="/female.png" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...styles.box, flexDirection: "row-reverse" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "65%",
              padding: "2%",
              borderRadius: "12px",
              backgroundColor: "#06060E66",
              height: "100%",
              border: "1px solid #999999",
            }}
          ></Box>
          <Box
            sx={{
              width: "35%",
              height: "100%",
              padding: "2%",
              borderRadius: "12px",
              backgroundColor: "#06060E66",
              height: "100%",
              border: "1px solid #999999",
            }}
          >
            <Box>
              <Box
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Awards and Recognition
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                }}
              >
                Winner of the Best Travel Vlogger Award at the National Creators
                Awards 2023.
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Collaborations
              </Box>
              <Box>
                <Box component="img" src="/airbnb.png" />
                <Box component="img" src="/lonely.png" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Awards;
