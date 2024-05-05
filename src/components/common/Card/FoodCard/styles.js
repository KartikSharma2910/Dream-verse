const styles = {
  wrapper: {
    position: "relative",
    backgroundColor: "#8E4FFF",
    padding: "1rem",
    borderRadius: "10px",
    zIndex: 100,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  star: {
    width: "60px",
  },

  dish: {
    top: -70,
    zIndex: 100,
    right: 0,
    position: "absolute",
    width: "150px",
  },

  heading: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  description: {
    fontSize: "12px",
  },
};

export default styles;
