const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  locators: {
    display: "flex",
    gap: "20px",
  },

  locator: {
    fontSize: "20px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.4s",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  divider: {
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(90deg, #8E4FFF 60%, #F722C3 100%, #8E4FFF 60%)",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  cardsWrapper: {
    display: "flex",
    padding: "0 30px",
    justifyContent: "space-between",
  },
};

export default styles;
