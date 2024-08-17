import styles from "./Modal.module.css";
import { ReactComponent as IconClose } from "./icon-close.svg";

const Modal = ({ onClose = () => {}, children }) => {
  return (
    <div className={styles.backdrop} id="backdrop">
      <div className={styles.Modal} data-modal="true">
        <button className={styles.button} type="button" onClick={onClose}>
          <IconClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
