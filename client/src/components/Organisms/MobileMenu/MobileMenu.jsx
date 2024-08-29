import styles from "./MobileMenu.module.css";
import { Navigation } from "../Navigation/Navigation";
import { SwitchMode } from "../../Atoms/SwitchMode/SwitchMode";
import { useDarkMode } from "../../../context/DarkModeContext";
import { Logo } from "../../Atoms/Logo/Logo";
import { Link } from "react-router-dom";
import { ReactComponent as IconClose } from "./icon-close.svg";
import { useState } from "react";

const MobileMenu = ({ onClose }) => {
  const [shouldClose, setShouldClose] = useState(false);
  const { isDark } = useDarkMode();
  function close() {
    setShouldClose(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  }

  const handleNav = (event) => {
    const target = event.target;
    if (target.closest("a")) {
      close();
    }
    return;
  };

  return (
    <div
      className={[
        styles.MobileMenu,
        shouldClose && styles.onClose,
        isDark && styles.isDark,
      ].join(" ")}
      onClick={handleNav}
      data-container
    >
      <div className={styles.logo}>
        <Link to="/home" className={styles.icon} onClick={close}>
          <Logo />
        </Link>

        <button className={styles.close} type="button" onClick={close}>
          <IconClose />
        </button>
      </div>
      <div className={styles.nav}>
        <Navigation />
      </div>
      <div className={styles.darkMode}>
        <SwitchMode />
      </div>
    </div>
  );
};

export { MobileMenu };
