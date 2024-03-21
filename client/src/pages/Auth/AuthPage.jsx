import styles from "./AuthPage.module.css";
import { AuthForm } from "../../components/Organisms/AuthForm/AuthForm.jsx";
import { AuthPageImage } from "../../components/Atoms/AuthPageImage/AuthPageImage.jsx";

const AuthPage = ({ isRegister }) => {
  return (
    <div className={styles.AuthPage}>
      <AuthPageImage />
      <AuthForm isRegister={isRegister} />
    </div>
  );
};

export { AuthPage };
