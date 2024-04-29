const styles = {
  glowBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  insiderData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transform: "skewX(30deg)",
  },

  image: {
    width: "130px",
    height: "80px",
    borderRadius: "10px",
    objectPosition: "center",
    objectFit: "contain",
    transform: "skewX(-15deg)",
  },

  glowBoxText: {
    fontSize: "16px",
    letterSpacing: "2px",
    fontFamily: "Dancing Script, cursive",
  },
};

export default styles;
