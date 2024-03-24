import styles from "./Header.module.css";
import { Logo } from "../../Atoms/Logo/Logo.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";
import { UserHeader } from "../../Molecules/UserHeader/UserHeader.jsx";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <div className={styles.nav}>
        <Navigation />
      </div>
      <UserHeader />
    </div>
  );
};

export { Header };
