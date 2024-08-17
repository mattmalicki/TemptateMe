import styles from "./ModalLogout.module.css";
import { Modal } from "../../Templates/Modal/Modal.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/operations.js";
import { RectangleButton } from "../../Atoms/RectangleButton/RectangleButton.jsx";

const ModalLogout = ({ closeModal = () => {} }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Modal onClose={closeModal}>
      <div className={styles.ModalLogout}>
        <span>Are you sure you want to logout?</span>
        <div className={styles.buttons}>
          <RectangleButton title="Log out" onClick={handleLogout} />
          <RectangleButton
            title="Cancel"
            onClick={closeModal}
            colorScheme="gray"
          />
        </div>
      </div>
    </Modal>
  );
};

export { ModalLogout };
