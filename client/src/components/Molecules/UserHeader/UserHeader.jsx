import styles from "./UserHeader.module.css";
import { UserInfo } from "../../Atoms/UserInfo/UserInfo.jsx";
import { MenuIcon } from "../../Atoms/MenuIcon/MenuIcon.jsx";
import { SwitchMode } from "../../Atoms/SwitchMode/SwitchMode.jsx";
import { UserWindow } from "../../Atoms/UserWindow/UserWindow.jsx";
import { useState } from "react";

const UserHeader = () => {
  const [openUserWindow, setOpenUserWindow] = useState(false);

  const onClick = () => {
    setOpenUserWindow(true);
  };
  return (
    <div className={styles.UserHeader}>
      <UserInfo onClick={onClick} />
      <div className={styles.menuIcon}>
        <MenuIcon />
      </div>
      <div className={styles.switchIcon}>
        <SwitchMode />
      </div>
      {openUserWindow && <UserWindow />}
    </div>
  );
};
export { UserHeader };
