import { FC } from "react";

import Modal from "react-modal";

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "#0008",
    zIndex: 20,
  },
};

Modal.setAppElement("#modal-root");

const CustomModal: FC<Modal.Props> = ({ children, isOpen, ...otherProps }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} {...otherProps}>
      {children}
    </Modal>
  );
};

export default CustomModal;
