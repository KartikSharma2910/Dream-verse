const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },

  locators: {
    display: "flex",
    justifyContent: "flex-end",
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
};

export default styles;
