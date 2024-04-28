const styles = {
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(51, 0, 142, 0.3), rgba(0, 0, 0, 0.9))",
    pointerEvents: "none",
  },

  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
    zIndex: 100,
  },

  heading: {
    fontSize: {
      xs: "30px",
      sm: "45px",
      md: "60px",
    },
    fontWeight: 600,
  },

  description: {
    fontSize: {
      xs: "18px",
      sm: "24px",
      md: "28px",
    },
    textTransform: "uppercase",
    fontWeight: 500,
  },

  subDescription: {
    width: {
      xs: "80%",
      md: "40%",
    },
    textAlign: "center",
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
    },
  },

  bannerFooter: {
    fontSize: {
      xs: "22px",
      sm: "24px",
      md: "28px",
    },
    fontWeight: 300,
    letterSpacing: "4px",
    textTransform: "uppercase",
    zIndex: 100,
    bottom: -120,
    position: "absolute",
  },
};

export default styles;
