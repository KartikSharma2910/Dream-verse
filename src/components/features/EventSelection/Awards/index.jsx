import InstagramIcon from "@mui/icons-material/Instagram";
import MaleIcon from "@mui/icons-material/Male";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import { Button, Section } from "components/common";
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
              <Box sx={styles.mildDescription}>
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
                  <Box sx={styles.infoText}>Subscriber</Box>
                  <Box sx={styles.designText}>230641+</Box>
                </Box>
                <Box>
                  <Box sx={styles.infoText}>Watch hour</Box>
                  <Box sx={styles.designText}>980008+</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.middleBox}>
            <Box sx={styles.boldHeading}>Background</Box>
            <Box sx={styles.mildDescription}>
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
          <Box sx={styles.genderBox}>
            <Box sx={styles.boldHeading}>Gender Demographics</Box>
            <Box sx={styles.genderMain}>
              <Box sx={styles.genderContainer}>
                <Box sx={styles.genderImageWrapper}>
                  <Box component="img" src="/male.png" sx={styles.maleImage} />
                  <MaleIcon sx={styles.maleIcon} />
                </Box>
                <Box>
                  <Box sx={styles.boldHeading}>82%</Box>
                  <Box sx={styles.infoText}>Male Audience</Box>
                </Box>
              </Box>
              <Box sx={styles.femaleContainer}>
                <Box>
                  <Box sx={styles.boldHeading}>82%</Box>
                  <Box sx={styles.infoText}>Female Audience</Box>
                </Box>
                <Box
                  component="img"
                  src="/female.png"
                  sx={styles.femaleImage}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...styles.box, flexDirection: "row-reverse" }}>
          <Box sx={styles.lowerBigBox}>
            <Box>
              <Box sx={styles.boldHeading}>Content Categories</Box>
              <Box sx={styles.lowerImageContainer}>
                <Box sx={styles.lowerImageWrapper}>
                  <Box
                    component="img"
                    src="/lifestyle.png"
                    sx={styles.lowerImage}
                  />
                  <Box>Lifestyle</Box>
                </Box>
                <Box sx={styles.lowerImageWrapper}>
                  <Box
                    component="img"
                    src="/travelling.png"
                    sx={styles.lowerImage}
                  />
                  <Box>Shopping</Box>
                </Box>
                <Box sx={styles.lowerImageWrapper}>
                  <Box
                    component="img"
                    src="/adventure.png"
                    sx={styles.lowerImage}
                  />
                  <Box>Adventure</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.lowerSmallBox}>
            <Box sx={styles.smallBoxDataContainer}>
              <Box sx={styles.boldHeading}>Awards and Recognition</Box>
              <Box sx={styles.mildDescription}>
                Winner of the Best Travel Vlogger Award at the National Creators
                Awards 2023.
              </Box>
            </Box>
            <Box sx={styles.smallBoxDataContainer}>
              <Box sx={styles.boldHeading}>Collaborations</Box>
              <Box sx={styles.smallBoxImages}>
                <Box
                  component="img"
                  src="/airbnb.png"
                  sx={styles.lowerImageMain}
                />
                <Box
                  component="img"
                  src="/lonely.png"
                  sx={styles.lowerImageMain}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Awards;
