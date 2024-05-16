const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  headerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
    gap: "15px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "bold",
  },

  description: {
    fontWeight: 200,
    textAlign: "center",
    wordSpacing: "2px",
    fontSize: "16px",
  },

  boxer: {
    display: "flex",
    justifyContent: "space-between",
  },

  gradientBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    fontWeight: "bold",
    width: "28%",
    borderRadius: "12px",
    background: "linear-gradient(136.14deg, #F722C3 -10.03%, #8E4FFF 95.19%)",
  },

  boxerDesc: {
    fontSize: "16px",
    wordSpacing: "2px",
    width: "68%",
    padding: "6%",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid #999999",
  },
};

export default styles;
