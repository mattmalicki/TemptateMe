import styles from "./UserWindow.module.css";
import { CurvedButton } from "../CurvedButton/CurvedButton.jsx";
import { ReactComponent as LogoutIcon } from "./icon-logout.svg";
import { ReactComponent as EditIcon } from "./icon-edit.svg";
import { useEffect, useState } from "react";
import { ModalLogout } from "../../Organisms/ModalLogout/ModalLogout.jsx";

const UserWindow = ({ onClose }) => {
  const [modal, setModal] = useState(false);
  const close = (event) => {
    console.log(event.target);
    if (event.target.id === "backdrop") {
      setModal(false);
      return;
    }
    if (event.target.dataset.modal) {
      return;
    }
    if (!event.target.dataset.userWindow) {
      onClose();
    }
  };
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", close);
    }, 100);
    return () => {
      window.removeEventListener("click", close);
    };
  });

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className={styles.UserWindow} data-user-window="true">
      <button className={styles.editButton}>
        Edit profile <EditIcon />
      </button>
      <CurvedButton greenOrBlack="green" size="small" onClick={openModal}>
        <span>Logout</span>{" "}
        <div className={styles.icon}>
          <LogoutIcon />
        </div>
      </CurvedButton>
      {modal && <ModalLogout closeModal={closeModal} />}
    </div>
  );
};

export { UserWindow };
