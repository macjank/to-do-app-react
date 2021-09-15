import styles from "../css/Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay children={children} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
