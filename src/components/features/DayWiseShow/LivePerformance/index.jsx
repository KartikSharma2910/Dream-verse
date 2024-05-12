import { Box } from "@mui/material";
import { Card, InfoContainer, Section } from "components/common";
import { livePerformance } from "constants/livePerformance";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles";

const LivePerformance = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <InfoContainer
          label="Experience the Magic of Live Performances"
          heading="Chief Guest Showcase: A Star-Studded Lineup"
          description="Empower Your Favorites, Shape the Show"
          text="Prepare to be dazzled by our esteemed Chief Guests, who bring their unique talents and vibrant energy to the Dream Verse stage. From sensational singers to electrifying DJ artists and mesmerizing hip-hop dancers, our lineup promises an unforgettable entertainment experience. Join us as we celebrate the convergence of creativity and talent with these luminaries of the entertainment world."
        />
        <Swiper slidesPerView={4} spaceBetween={30}>
          {livePerformance.map((item, index) => (
            <SwiperSlide key={index} style={styles.swiper}>
              <Card as="GlowCard" {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Section>
  );
};

export default LivePerformance;
