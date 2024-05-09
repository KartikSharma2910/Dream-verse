const styles = {
  wrapper: {
    height: "min-content",
  },

  dayWrap: {
    textAlign: "center",
  },

  containerDay: {
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundImage: "linear-gradient(to left, #F722C3, #8E4FFF)",
    transition: "all 0.4s",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  dataRenderer: {
    flexDirection: "column",
    gap: "3rem",
  },

  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "Sedan SC, serif",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundImage: "linear-gradient(to right, #F3CB85, #AB7642)",
  },

  dataBox: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  dataHeading: {
    fontSize: "28px",
    fontWeight: 600,
  },

  dataDesc: {
    fontSize: "16px",
    fontWeight: 200,
    width: "90%",
  },
};

export default styles;
