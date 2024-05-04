const styles = {
  wrapper: {
    position: "relative",
    minHeight: "480px",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "2rem",
    gap: "20px",
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    top: 0,
    bottom: 0,
    zIndex: "-1",
  },

  day: {
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.4s",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundImage: "linear-gradient(to left, #F722C3, #8E4FFF)",
  },

  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.4s",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundImage: "linear-gradient(to right, #F3CB85, #AB7642)",
  },

  dataWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  dataHeading: {
    fontSize: "22px",
  },

  dataDescription: {
    fontSize: "14px",
  },
};

export default styles;
