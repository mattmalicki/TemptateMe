import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";
import { Logo } from "../../components/Atoms/Logo/Logo.jsx";
import { CurvedButton } from "../../components/Atoms/CurvedButton/CurvedButton.jsx";

const StartPage = () => {
  return (
    <section className={styles.StartPage}>
      <div className={styles.icon}>
        <Logo />
      </div>
      <h1 className={styles.title}>Welcome to the app!</h1>
      <p className={styles.comment}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div className={styles.buttons}>
        <Link to="register">
          <CurvedButton title="Registration" greenOrBlack="green" />
        </Link>
        <Link to="signin">
          <CurvedButton title="Sign in" />
        </Link>
      </div>
    </section>
  );
};

export { StartPage };
