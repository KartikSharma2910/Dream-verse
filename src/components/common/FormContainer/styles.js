const styles = {
  wrapper: {
    display: "flex",
  },

  imageWrapper: {
    width: "50%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    backgroundColor: "rgba(46, 46, 46, 1)",
    padding: "3%",
    width: "50%",
  },

  heading: {
    fontSize: "24px",
    fontWeight: 600,
    textAlign: "center",
  },

  registerHeading: {
    fontSize: "24px",
    fontWeight: 600,
  },

  description: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: "14px",
    fontWeight: 300,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  form: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 3,
  },
};

export default styles;
