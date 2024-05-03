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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <InfoContainer
            label="Gallery"
            heading="Explore Memorable Moments and Fan Creations"
            description="Empower Your Favorites, Shape the Show"
            text="Delve into the heart of Dream Verse with our captivating gallery section. Whether through a dynamic carousel or an organized grid layout, relive the magic of past events as we showcase behind-the-scenes photos, candid moments, and interactions that define the essence of our celebration. Additionally, discover the creativity and passion of our devoted fans as we feature their artwork and heartfelt messages dedicated to their favorite creators."
            customStyles={{
              width: "65%",
            }}
          />
          <Box
            sx={{
              width: "30%",
              height: "300px",
            }}
          >
            <Box
              component="img"
              src="/gallery1.png"
              sx={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              src="/gallery2.png"
              sx={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "400px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              width: "33%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src="/gallery3.png"
              sx={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "33%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "200px",
              }}
            >
              <Box
                component="img"
                src="/gallery4.png"
                sx={{
                  width: "50%",
                  objectFit: "cover",
                }}
              />
              <Box
                component="img"
                src="/gallery5.png"
                sx={{
                  width: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                height: "200px",
              }}
            >
              <Box
                component="img"
                src="/gallery7.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "33%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src="/gallery6.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Gallery;
