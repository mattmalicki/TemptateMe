import styles from "./Header.module.css";
import { Logo } from "../../Atoms/Logo/Logo.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";
import { UserHeader } from "../../Molecules/UserHeader/UserHeader.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/home" className={styles.icon}>
        <Logo />
      </Link>
      <div className={styles.nav}>
        <Navigation />
      </div>
      <UserHeader />
    </header>
  );
};

export { Header };
