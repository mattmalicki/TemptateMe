import styles from "./UserHeader.module.css";
import { UserInfo } from "../../Atoms/UserInfo/UserInfo.jsx";
import { MenuIcon } from "../../Atoms/MenuIcon/MenuIcon.jsx";
import { SwitchMode } from "../../Atoms/SwitchMode/SwitchMode.jsx";
import { UserWindow } from "../../Atoms/UserWindow/UserWindow.jsx";
import { MobileMenu } from "../../Organisms/MobileMenu/MobileMenu.jsx";
import { useState } from "react";

const UserHeader = () => {
  const [openUserWindow, setOpenUserWindow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenUserWindow = () => {
    setOpenUserWindow(true);
  };
  const handleCloseUserWindow = () => {
    setOpenUserWindow(false);
  };
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setTimeout(() => {
      setOpenMenu(false);
    }, 1000);
  };

  return (
    <div className={styles.UserHeader}>
      <UserInfo onClick={handleOpenUserWindow} />
      <button className={styles.menuIcon} onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      {openMenu && <MobileMenu onClose={handleCloseMenu} />}
      <div className={styles.switchIcon}>
        <SwitchMode />
      </div>
      {openUserWindow && <UserWindow onClose={handleCloseUserWindow} />}
    </div>
  );
};
export { UserHeader };
