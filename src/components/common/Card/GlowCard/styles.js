const styles = {
  wrapper: {
    borderRadius: "10px",
    background:
      "linear-gradient(180deg, rgba(10, 10, 10, 0.25) 50%, rgba(142, 79, 255, 0.25) 100%)",
    border: "1px solid",
    borderColor: "#8F8E8E",
  },

  image: {
    height: "250px",
    width: "100%",
    borderRadius: "10px 10px 0px 0px",
    objectFit: "cover",
  },

  dataWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    gap: "24px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  heading: {
    fontSize: "22px",
    textAlign: "center",
  },

  description: {
    fontSize: "14px",
    color: "#8E4FFF",
    textAlign: "center",
  },

  text: {
    width: "90%",
    fontSize: "14px",
    textAlign: "center",
  },

  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  button: {
    width: "250px",
  },

  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
};

export default styles;
