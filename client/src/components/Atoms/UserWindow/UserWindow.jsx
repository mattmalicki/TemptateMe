import styles from "./UserWindow.module.css";
import { CurvedButton } from "../CurvedButton/CurvedButton.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/operations.js";
import { ReactComponent as LogoutIcon } from "./icon-logout.svg";
import { ReactComponent as EditIcon } from "./icon-edit.svg";
import { useEffect } from "react";

const UserWindow = ({ onClose }) => {
  const dispatch = useDispatch();
  const close = (event) => {
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

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.UserWindow} data-user-window="true">
      <button className={styles.editButton}>
        Edit profile <EditIcon />
      </button>
      <CurvedButton greenOrBlack="green" size="small" onClick={handleClick}>
        <span>Logout</span>{" "}
        <div className={styles.icon}>
          <LogoutIcon />
        </div>
      </CurvedButton>
    </div>
  );
};

export { UserWindow };
