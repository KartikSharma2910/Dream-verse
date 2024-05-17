const styles = {
  mainModal: {
    "& .MuiModal-root": {
      borderRadius: "20px",
    },

    "& .MuiModal-backdrop": {
      backdropFilter: "blur(10px)",
    },
  },

  modal: {
    position: "absolute",
    borderRadius: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
  },
};

export default styles;
