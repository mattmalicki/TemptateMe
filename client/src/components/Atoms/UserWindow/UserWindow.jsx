import styles from "./UserWindow.module.css";
import { CurvedButton } from "../CurvedButton/CurvedButton.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/operations.js";
import { ReactComponent as LogoutIcon } from "./icon-logout.svg";
import { ReactComponent as EditIcon } from "./icon-edit.svg";

const UserWindow = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.UserWindow}>
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
