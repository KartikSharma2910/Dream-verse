const styles = {
  wrapper: {
    position: "relative",
    backgroundColor: "linear-gradient(to right, #8E4FFF 0%, #F722C3 100%)",
    borderRadius: "10px",
    fontSize: "14px",
    transition: "all 0.3s ease",
    minWidth: {
      mobile: "174px",
      tablet: "185px",
    },
    height: "50px",
    textTransform: "capitalize",
    "&:hover": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      backgroundColor: "linear-gradient(to right, #8E4FFF 0%, #F722C3 100%)",
    },
    "&:active": {
      boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.25)",
      backgroundColor: "linear-gradient(to right, #8E4FFF 0%, #F722C3 100%)",
      color: "#fff",
    },
  },
};

export default styles;
