import { Box } from "@mui/material";
import { InfoContainer, Section, VideoPlayer } from "components/common";
import { creativity } from "constants/creativity";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles";

const Creativity = () => {
  const [idx, setIdx] = useState(-1);

  const page = 1;
  return (
    <Section customStyles={styles.wrapper}>
      <InfoContainer
        heading="Experience the Magic of Creativity"
        description="Dive into the World of Dream Verse"
      />
      <Swiper slidesPerView={4} spaceBetween={30}>
        {creativity.map(({ thumblain, src, text }, index) => (
          <SwiperSlide key={index} style={styles.swiper}>
            <VideoPlayer
              key={index}
              page={0}
              src={src}
              index={page * 10000}
              passOverlay={false}
              currentIdx={idx}
              setIndex={setIdx}
              thumbnail={thumblain}
            />
            <Box sx={styles.text}>{text}</Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Creativity;
