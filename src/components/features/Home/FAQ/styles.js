const styles = {
  wrapper: {
    height: "min-content",
  },

  faqWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },

  heading: {
    fontSize: "30px",
    fontWeight: "bold",
  },

  description: {
    fontSize: "14px",
    fontWeight: 200,
  },

  accordianContainer: {
    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
      borderBottom: "1px solid #FDCCDE",
      color: "white",
      margin: "20px",
    },
  },

  accordianIcon: {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: {
      xs: "41px",
      sm: "48px",
    },
    width: "50px",
  },

  icon: {
    fontSize: "30px",
    color: "#8E4FFF",
  },

  accordianSummaryWrapper: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  accordianText: {
    fontSize: "22px",
    fontWeight: 500,
  },

  accordianDescription: {
    fontSize: "16px",
    borderLeft: "1px solid #8E4FFF",
    paddingLeft: "1%",
    marginLeft: "4%",
  },
};

export default styles;
