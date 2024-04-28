const styles = {
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.2),rgba(51, 0, 142, 0.4),rgba(0, 0, 0, 0.5))",
    pointerEvents: "none",
  },
};

export default styles;
