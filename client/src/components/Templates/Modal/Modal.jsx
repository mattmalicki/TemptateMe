import styles from "./Modal.module.css";
import { ReactComponent as IconClose } from "./icon-close.svg";

const Modal = ({ onClose = () => {}, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.Modal}>
        <button type="button" onClick={onClose}>
          <IconClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
