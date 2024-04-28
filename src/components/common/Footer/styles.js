const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    backgroundColor: "#1C1C1C",
    padding: "3rem 40px",
  },

  upperWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  box: {
    width: "22%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  informationBox: {
    width: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },

  brand: {
    fontFamily: "Dancing Script, cursive",
    fontSize: "28px",
    letterSpacing: "2px",
    color: "#6C63FF",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  heading: {
    fontSize: "22px",
    fontWeight: 500,
  },

  description: {
    fontSize: "14px",
    fontWeight: 200,
  },

  contactUs: {
    fontSize: "16px",
  },

  linkers: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    "& a": {
      color: "white",
      fontSize: "14px",
      fontWeight: 200,
    },
  },

  divider: {
    width: "100%",
    height: "1.5px",
    backgroundColor: "#FDCCDE",
  },

  iconWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-20px",
    gap: 2,
  },

  icon: {
    color: "#8E4FFF",
    fontSize: "22px",
  },
};

export default styles;
