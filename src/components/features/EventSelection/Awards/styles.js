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
    gap: 3,
    width: "90%",
    margin: "0 auto",
    display: "flex",
    overflow: "hidden",
    maxHeight: "400px",
    justifyContent: "space-between",
  },

  upperBoxOne: {
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    height: "100%",
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
    fontSize: "14px",
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
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(6, 5, 15, 1)",
    border: "5px solid",
    borderColor: "rgba(34, 30, 24, 1)",
    width: "30%",
    borderRadius: "12px",
  },

  button: {
    fontSize: "20px",
    fontWeight: "bold",
    width: "100%",
  },

  upperBoxTwo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    height: "100%",
  },

  upperBoxThree: {
    gap: 2,
    display: "flex",
    flexDirection: "column",
    width: "33%",
    height: "100%",
  },

  dataWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "15px",
    padding: "4%",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid #999999",
  },

  dataHeading: {
    fontSize: "22px",
    fontWeight: 600,
  },

  dataLowerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    height: "200px",
    widht: "100%",
  },

  dataLowerOne: {
    width: "48%",
    height: "100%",
  },

  dataLowerImage: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },

  dataLowerTwo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "48%",
    height: "100%",
    padding: "4%",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid #999999",
    background: "#06060E66",
  },

  infoText: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 1)",
  },

  designText: {
    fontSize: "28px",
    background: "linear-gradient(90deg, #8E4FFF 0%, #F722C3 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  middleBox: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #999999",
    gap: "20px",
    width: "65%",
    padding: "2%",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    backgroundColor: "#06060E66",
  },

  boldHeading: {
    fontSize: "24px",
    fontWeight: 600,
  },

  mildDescription: {
    fontSize: "14px",
  },

  genderMain: {
    position: "relative",
    height: "200px",
    backdropFilter: "blur(10px)",
  },

  genderBox: {
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    gap: "12px",
    width: "35%",
    height: "100%",
    padding: "2%",
    borderRadius: "12px",
    backgroundColor: "#06060E66",
    border: "1px solid #999999",
  },

  genderContainer: {
    display: "flex",
    gap: "8px",
  },

  genderImageWrapper: {
    position: "relative",
  },

  maleImage: {
    width: "160px",
  },

  femaleImage: {
    width: "100px",
  },

  maleIcon: {
    fontSize: "80px",
    color: "black",
    left: 45,
    bottom: 50,
    position: "absolute",
  },

  femaleContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },

  lowerBigBox: {
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    gap: "20px",
    width: "65%",
    padding: "2%",
    borderRadius: "12px",
    backgroundColor: "#06060E66",
    height: "100%",
    border: "1px solid #999999",
  },

  lowerImageContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  lowerImageWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  lowerImage: {
    width: "160px",
    objectFit: "cover",
  },

  lowerSmallBox: {
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    gap: "20px",
    width: "35%",
    height: "100%",
    padding: "2%",
    borderRadius: "12px",
    backgroundColor: "#06060E66",
    border: "1px solid #999999",
  },

  smallBoxDataContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  smallBoxImages: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  lowerImageMain: {
    width: "140px",
  },
};

export default styles;
