import styles from "./AuthPage.module.css";
import { AuthForm } from "../components/web/Organisms/AuthForm/AuthForm.jsx";
import { AuthPageImage } from "../components/web/Atoms/AuthPageImage/AuthPageImage.jsx";

const AuthPage = ({ isRegister }) => {
  return (
    <div className={styles.AuthPage}>
      <AuthPageImage />
      <AuthForm isRegister={isRegister} />
    </div>
  );
};

export { AuthPage };
