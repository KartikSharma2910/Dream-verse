const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "4px",
    overflow: "hidden",
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  overlayWrapper: {
    position: "absolute",
    display: "flex",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    inset: "0 0 0 0",
    backgroundImage:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
    zIndex: 5,
    cursor: "pointer",
  },

  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
    zIndex: 5,
    inset: "0 0 0 0",
  },

  title: {
    color: "custom.white",
    padding: "12px 14px",
    fontSize: {
      mobile: "12px",
      tablet: "14px",
      laptop: "15px",
    },
    fontWeight: 600,
    whiteSpace: "nowrap",
    zIndex: 5,
  },

  playIcon: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    cursor: "pointer",
  },

  icon: {
    fontSize: "80px",
  },

  timerWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  timerIcons: {
    display: "flex",
  },

  thumbnail: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  clockIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },

  accessIcon: {
    color: "custom.white",
    fontSize: {
      mobile: "14px",
      tablet: "18px",
      laptop: "20px",
    },
  },
};

export default styles;
