import { Box } from "@mui/material";
import { InfoContainer, Section } from "components/common";
import styles from "./styles";

const FoodAndBevereges = () => {
  return (
    <Section sx={styles.container}>
      <Box sx={styles.wrapper}>
        <InfoContainer
          customStyles={styles.infoContainer}
          label="Food Extravaganza"
          heading="Indulge your taste buds in a culinary journey like no other"
          text="Embark on a gastronomic adventure with our Food Extravaganza! Treat yourself to an exquisite selection of gourmet delights and street food favorites sourced from around the globe. From savory to sweet, spicy to mild, our menu promises to tantalize your senses and leave you craving for more. Join us as we celebrate the diversity of flavors and the joy of indulgence at Dream Verse"
        />
        <Box sx={styles.dataContainer}>
          <Box
            component="img"
            className="blinking-star"
            src="/stars.png"
            sx={styles.star}
          />
          <Box sx={styles.textContainer}>
            <Box sx={styles.heading}>Booztank Bonanza</Box>
            <Box sx={styles.text}>
              Quench your thirst with our refreshing selection of ice-cold
              beers. Enjoy unlimited access to a variety of brews, from crisp
              lagers to hoppy ales, as you mingle and celebrate with fellow
              creators at "Dream Verse".
            </Box>
          </Box>
          <Box component="img" src="/beerImage.png" sx={styles.beer} />
          <Box
            component="img"
            className="blinking-star"
            src="/stars.png"
            sx={styles.bottomStar}
          />
        </Box>
      </Box>
    </Section>
  );
};

export default FoodAndBevereges;
