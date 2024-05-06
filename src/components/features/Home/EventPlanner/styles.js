const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },

  heading: {
    textTransform: "uppercase",
    color: "#8E4FFF",
  },

  description: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  sponserWrapper: {
    display: "flex",
    gap: 3,
    marginTop: "2rem",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },

  sponser: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "18%",
  },

  image: {
    objectFit: "cover",
    objectPosition: "center",
  },
};

export default styles;
