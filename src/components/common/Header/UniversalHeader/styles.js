const styles = {
  wrapper: {
    padding: "0 40px",
    position: "relative",
    height: "65px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  heading: {
    fontFamily: "Dancing Script, cursive",
    fontSize: "28px",
    letterSpacing: "2px",
  },

  linkers: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    gap: 3,

    "& a": {
      color: "white",
      fontSize: "14px",
    },
  },
};

export default styles;
