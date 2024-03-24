import styles from "./UserHeader.module.css";
import { UserInfo } from "../../Atoms/UserInfo/UserInfo.jsx";
import { MenuIcon } from "../../Atoms/MenuIcon/MenuIcon.jsx";
import { SwitchMode } from "../../Atoms/SwitchMode/SwitchMode.jsx";

const UserHeader = () => {
  return (
    <div className={styles.UserHeader}>
      <UserInfo />
      <div className={styles.menuIcon}>
        <MenuIcon />
      </div>
      <div className={styles.switchIcon}>
        <SwitchMode />
      </div>
    </div>
  );
};
export { UserHeader };
