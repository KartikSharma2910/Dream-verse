import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const imageRenderer = [
  {
    image: "/nominee1.png",
    color: "#F722C3",
    height: "400px",
    bottom: 0,
  },
  {
    image: "/nominee2.png",
    color: "#F7B200",
    height: "380px",
    bottom: 0,
  },
  {
    image: "/nominee4.png",
    color: "#8E4FFF",
    height: "350px",
    bottom: -1,
  },
  {
    image: "/nominee3.png",
    color: "#F7B200",
    height: "380px",
    bottom: -1,
  },
  {
    image: "/nominee5.png",
    color: "#F722C3",
    height: "400px",
    bottom: -1,
  },
];

const ImageRenderer = () => {
  return (
    <Section customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        {imageRenderer.map(({ image, color, height, bottom }, index) => (
          <Box
            sx={{ ...styles.box, backgroundColor: color, height }}
            key={index}
          >
            <Box
              component="img"
              src={image}
              sx={{
                ...styles.image,
                bottom,
              }}
            />
            <Box sx={styles.overlay} />
          </Box>
        ))}
      </Box>
      <Box sx={styles.dataContainer}>
        <Box sx={styles.heading}>Join us this and next seven day</Box>
        <Box sx={styles.sunday}>Sunday</Box>
        <Box component="img" src="/enjoy.png" sx={styles.enjoy} />
      </Box>
    </Section>
  );
};

export default ImageRenderer;
