const styles = {
  wrapper: {
    position: "relative",
  },

  image: {
    zIndex: -1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  kid: {
    zIndex: 100,
  },
};

export default styles;
