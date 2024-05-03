import { Box } from "@mui/material";
import { InfoContainer, Section } from "components/common";
import { galleryLocators } from "constants/gallery";
import { useState } from "react";
import styles from "./styles";

const Gallery = () => {
  const [gallery, setGallery] = useState("acting");

  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.locators}>
          {galleryLocators.map(({ label, route }, index) => (
            <Box
              key={index}
              onClick={() => setGallery(route)}
              sx={{
                ...styles.locator,
                backgroundImage:
                  gallery === route
                    ? "linear-gradient(to left, #F722C3, #8E4FFF)"
                    : "linear-gradient(to right, #D9D9D9, #66666E)",
              }}
            >
              #{label}
            </Box>
          ))}
        </Box>
        <Box sx={styles.dataContainer}>
          <InfoContainer
            label="Gallery"
            heading="Explore Memorable Moments and Fan Creations"
            description="Empower Your Favorites, Shape the Show"
            text="Delve into the heart of Dream Verse with our captivating gallery section. Whether through a dynamic carousel or an organized grid layout, relive the magic of past events as we showcase behind-the-scenes photos, candid moments, and interactions that define the essence of our celebration. Additionally, discover the creativity and passion of our devoted fans as we feature their artwork and heartfelt messages dedicated to their favorite creators."
            customStyles={styles.infoContainer}
          />
          <Box sx={styles.infoImageContainer}>
            <Box component="img" src="/gallery1.png" sx={styles.infoImage} />
            <Box component="img" src="/gallery2.png" sx={styles.infoImage} />
          </Box>
        </Box>
        <Box sx={styles.bottomImageContainer}>
          <Box sx={styles.leftImage}>
            <Box component="img" src="/gallery3.png" className="leftImage" />
          </Box>
          <Box sx={styles.imageContainer}>
            <Box sx={styles.upperCenterImage}>
              <Box
                component="img"
                src="/gallery4.png"
                className="upperCenterImage"
              />
              <Box
                component="img"
                src="/gallery5.png"
                className="upperCenterImage"
              />
            </Box>
            <Box sx={styles.bottomCenterImageContainer}>
              <Box component="img" src="/gallery7.png" sx={styles.image} />
            </Box>
          </Box>
          <Box sx={styles.imageContainer}>
            <Box component="img" src="/gallery6.png" sx={styles.image} />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Gallery;
