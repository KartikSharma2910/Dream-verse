const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    width: {
      xs: "250px",
      sm: "320px",
    },
    minWidth: {
      xs: "250px",
      sm: "320px",
    },
    marginTop: "1.5rem",
    padding: "1rem",
    borderRadius: "24px",
    transition: "all 0.4s",
    background: "linear-gradient(to bottom, #28272F 0%, #040404 100%)",
    boxShadow:
      "-6px -10px 12px #6A38F5,6px -10px 12px #EA245A,6px 6px 12px #EB8145,-6px 6px 12px #1E99FE",
    "&:hover": {
      boxShadow:
        "-6px -10px 24px #6A38F5,6px -10px 24px #EA245A,6px 6px 24px #EB8145,-6px 6px 24px #1E99FE",
    },
  },

  number: {
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.6rem",
    },
    color: "#C7C0BD",
    // background:
    //   "linear-gradient(to right, #EEF1F0 0%, #EEF1F0 50%, #71757E 50%, #71757E 100%)",
    // "-webkit-background-clip": "text",
    // "-webkit-text-fill-color": "transparent",
  },
};

export default styles;
