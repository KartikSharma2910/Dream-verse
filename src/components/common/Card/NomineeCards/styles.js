const styles = {
  wrapper: {
    position: "relative",
    padding: "15px",
    height: "280px",
    width: "18%",
    cursor: "pointer",
    transition: "all 0.4s",

    "&:hover": {
      scale: "1.08",
    },
  },

  heading: {
    fontWeight: 500,
  },

  description: {
    fontSize: "12px",
    opacity: 0.8,
  },

  label: {
    fontSize: "34px",
    fontWeight: 600,
    left: "50%",
    transform: "translate(-50%)",
    position: "absolute",
    bottom: 10,
  },

  image: {
    bottom: 0,
    right: 20,
    width: "170px",
    objectFit: "cover",
    height: "200px",
    position: "absolute",
    transform: "scaleX(-1)",
  },
};

export default styles;
