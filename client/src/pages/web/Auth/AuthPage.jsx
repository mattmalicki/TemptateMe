import styles from "./AuthPage.module.css";
import { AuthForm } from "../../../components/web/Organisms/AuthForm/AuthForm.jsx";

const AuthPage = ({ isRegister }) => {
  return (
    <div className={styles.AuthPage}>
      <AuthForm isRegister={isRegister} />
    </div>
  );
};

export { AuthPage };
