import { Box } from "@mui/material";
import { Card, InfoContainer, Section } from "components/common";
import { days as Days } from "constants/dreamScape";
import { unleashDream } from "constants/unleashDream";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles";

const UnleashDream = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [days, setDays] = useState("day1");

  const swiperRef = useRef(null);

  const handleDayClick = (route) => {
    setDays(route);
    if (swiperRef.current) {
      const index = Days.findIndex((day) => day.route === route);
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <Section sx={styles.wrapper}>
      <Box sx={styles.container}>
        <InfoContainer
          label="Unleash Your Dreamscape"
          heading="A Dreamverse Daily Experience"
          description="Dive into a week of electrifying music, side-splitting comedy, global flavors, and creative exploration at Dreamverse!"
        />
        <Box sx={styles.locators}>
          {Days.map(({ label, route }, index) => (
            <Box
              key={index}
              onClick={() => handleDayClick(route)}
              sx={{
                ...styles.locator,
                backgroundImage:
                  days === route
                    ? "linear-gradient(to left, #F722C3, #8E4FFF)"
                    : "linear-gradient(to right, #D9D9D9, #66666E)",
              }}
            >
              #{label}
            </Box>
          ))}
        </Box>
        <Box>
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="mySwiper"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {unleashDream.map((data, index) => (
              <SwiperSlide
                key={index}
                style={{
                  transform: activeIndex === index ? "scale(1)" : "scale(0.9)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Card as="DreamCards" {...data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Section>
  );
};

export default UnleashDream;
