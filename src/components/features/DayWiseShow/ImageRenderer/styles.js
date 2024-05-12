const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },

  box: {
    position: "relative",
    width: "180px",
  },

  image: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    objectFit: "cover",
    transform: "scaleX(-1)",
  },

  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0,0,0,0.2)",
  },

  dataContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: "24px",
  },

  sunday: {
    fontSize: "80px",
    fontWeight: "bold",
  },

  enjoy: {
    position: "absolute",
    bottom: -45,
    width: "210px",
  },
};

export default styles;
