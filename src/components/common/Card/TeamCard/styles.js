const styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "260px",
  },

  image: {
    position: "absolute",
    width: "160px",
    left: 0,
    right: 0,
    bottom: 0,
  },

  dataBox: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    alignItems: "center",
    gap: 2,
    padding: "10px 15px",
    backdropFilter: "blur(10px)",
    border: "1px solid #999999",
  },

  user: {
    fontSize: "14px",
  },
};

export default styles;
