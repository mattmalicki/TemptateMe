import styles from "./MenuIcon.module.css";
import { ReactComponent as HamburgerIcon } from "./icon-menu.svg";

const MenuIcon = () => {
  return (
    <div className={styles.icon}>
      <HamburgerIcon />
    </div>
  );
};

export { MenuIcon };
