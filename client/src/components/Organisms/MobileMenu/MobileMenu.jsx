import styles from "./MobileMenu.module.css";
import { Navigation } from "../Navigation/Navigation";
import { SwitchMode } from "../../Atoms/SwitchMode/SwitchMode";
import { useDarkMode } from "../../../context/DarkModeContext";
import { Logo } from "../../Atoms/Logo/Logo";
import { Link } from "react-router-dom";
import { ReactComponent as IconClose } from "./icon-close.svg";

const MobileMenu = ({ onClose }) => {
  const { isDark } = useDarkMode();
  const closeMobile = (event) => {
    const target = event.target;
    if (target.nodeName === "A") {
      onClose();
    }
    return;
  };

  return (
    <div
      className={[styles.MobileMenu, isDark && styles.isDark].join(" ")}
      onClick={closeMobile}
    >
      <div className={styles.logo}>
        <Link to="/home" className={styles.icon} onClick={onClose}>
          <Logo />
        </Link>

        <button className={styles.close} type="button" onClick={onClose}>
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
