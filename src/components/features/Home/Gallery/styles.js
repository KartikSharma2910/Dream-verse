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

  dataContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  infoContainer: {
    width: "65%",
  },

  infoImageContainer: {
    width: "30%",
    height: "300px",
  },

  infoImage: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
  },

  bottomImageContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "400px",
  },

  leftImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    width: "33%",
    height: "100%",

    "& .leftImage": {
      width: "100%",
      objectFit: "cover",
    },
  },

  imageContainer: {
    width: "33%",
    height: "100%",
  },

  upperCenterImage: {
    display: "flex",
    width: "100%",
    height: "200px",

    "& .upperCenterImage": {
      width: "50%",
      objectFit: "cover",
    },
  },

  bottomCenterImageContainer: {
    height: "200px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default styles;
