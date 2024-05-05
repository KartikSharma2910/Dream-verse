const styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    backgroundColor: "#2E2E2E",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "170px",
    gap: "10px",
    padding: "0.5rem 1rem",
  },

  name: {
    fontSize: "16px",
  },

  text: {
    fontSize: "12px",
    textAlign: "center",
  },

  button: {
    position: "absolute",
    bottom: 10,
    width: "170px",
    height: "38px",
  },
};

export default styles;
