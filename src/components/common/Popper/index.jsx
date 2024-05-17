import { Box, Modal } from "@mui/material";
import styles from "./styles";

const Popper = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={styles.mainModal}
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus
    >
      <Box sx={styles.modal}>{children}</Box>
    </Modal>
  );
};

export default Popper;
