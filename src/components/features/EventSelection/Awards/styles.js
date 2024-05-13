const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  box: {
    display: "flex",
    gap: 3,
    padding: "2%",
    justifyContent: "space-between",
  },

  upperBoxOne: {
    gap: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    height: "400px",
    background: "#06060E66",
  },

  userImageWrapper: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
  },

  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },

  userTextWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  userName: {
    fontSize: "22px",
    fontWeight: 600,
  },

  userPost: {
    background: "linear-gradient(90deg, #8E4FFF 0%, #F722C3 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },

  socialContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  videoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  iconWrapper: {
    padding: "10px",
    border: "1px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "30%",
    borderRadius: "12px",
  },

  button: {
    fontSize: "22px",
    fontWeight: "bold",
    width: "100%",
  },

  upperBoxTwo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    height: "400px",
  },

  upperBoxThree: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "33%",
    height: "400px",
  },

  dataWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    padding: "2%",
    borderRadius: "12px",
    border: "1px solid #999999",
  },

  dataHeading: {
    fontSize: "22px",
    fontWeight: 600,
  },

  dataLowerWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  dataLowerOne: {
    width: "48%",
    height: "100%",
  },

  dataLowerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  dataLowerTwo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    height: "100%",
    padding: "2%",
    borderRadius: "12px",
    border: "1px solid #999999",
    background: "#06060E66",
  },

  designText: {
    fontSize: "28px",
    background: "linear-gradient(90deg, #8E4FFF 0%, #F722C3 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export default styles;
