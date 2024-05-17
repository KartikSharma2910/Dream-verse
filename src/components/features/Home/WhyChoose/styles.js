const styles = {
  wrapper: {
    height: "min-content",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    zIndex: 100,
  },

  glowBox: {
    position: "relative",
    display: "flex",
    marginTop: "-3rem",
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

  dataWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: "10em",
  },

  infoContainer: {
    width: {
      xs: "100%",
      md: "60%",
    },
  },

  numberWrapper: {
    gap: 5,
    display: {
      xs: "none",
      md: "flex",
    },
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
  },

  number: {
    fontSize: "36px",
    fontWeight: 600,
  },

  numberText: {
    fontSize: "18px",
    fontWeight: 300,
  },

  posterWrapper: {
    display: "flex",
    height: "120px",
  },

  posterContainer: {
    flex: 1,
    position: "relative",
  },

  posterImage: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    objectFit: "cover",
  },

  posterText: {
    fontSize: "18px",
    fontWeight: 500,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  input: {
    width: "47%",
  },

  button: {
    width: "100%",
  },
};

export default styles;
