import styles from "./AuthForm.module.css";
import { RectangleInput } from "../../Molecules/RectangleInput/RectangleInput";
import { RectangleButton } from "../../Atoms/RectangleButton/RectangleButton";

const AuthForm = ({ isRegister }) => {
  const onSubmitRegister = (event) => {
    event.preventDefault();
    console.log("Register");
  };
  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log("Sign in");
  };
  return (
    <div className={styles.container}>
      <form className={styles.AuthForm}>
        {isRegister && <h1 className={styles.title}>{"Sign up"}</h1>}
        {!isRegister && <h1 className={styles.title}>{"Sign in"}</h1>}
        <div className={styles.inputContainer}>
          {isRegister && (
            <RectangleInput isName={true} placeholderText={"Name"} />
          )}
          <RectangleInput isEmail={true} placeholderText={"Email"} />
          <RectangleInput isPassword={true} placeholderText={"Password"} />
        </div>
        {isRegister && (
          <RectangleButton
            title="Sign up"
            type="submit"
            onClick={onSubmitRegister}
          />
        )}
        {!isRegister && (
          <RectangleButton
            title="Sign in"
            type="submit"
            onClick={onSubmitLogin}
          />
        )}
      </form>
      {!isRegister && (
        <a href="/register" className={styles.link}>
          Registration
        </a>
      )}
      {isRegister && (
        <a href="/login" className={styles.link}>
          Sign in
        </a>
      )}
    </div>
  );
};

export { AuthForm };
