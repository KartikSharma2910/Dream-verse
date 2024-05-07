const styles = {
  wrapper: {
    padding: "0 40px",
    zIndex: 10,
    position: "fixed",
    height: "65px",
    display: "flex",
    width: "100%",
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
