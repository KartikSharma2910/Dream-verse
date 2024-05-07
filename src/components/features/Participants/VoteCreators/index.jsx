import { Card, InfoContainer, Section } from "components/common";
import { vote } from "constants/vote";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles";

const VoteCreators = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <InfoContainer
        label="Engage and Influence the Outcome"
        heading="Cast Your Vote for Your Favorite Creators"
        description="Empower Your Favorites, Shape the Show"
        text="Utilize our interactive voting mechanism to support your favorite creators across various categories. Witness the power of your vote reflected in real-time through dynamic progress bars, and be part of the excitement as the results unfold. Your participation fuels the spirit of Dream Verse and shapes the destiny of these remarkable talents. Vote now and be a part of this electrifying journey!"
      />
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        style={styles.swiper}
        pagination={{ clickable: true }}
      >
        {vote.map((card, index) => (
          <SwiperSlide key={index}>
            <Card as="VoteCard" {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default VoteCreators;
