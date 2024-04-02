import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";
import { RectangleInput } from "../../Molecules/RectangleInput/RectangleInput";
import { RectangleButton } from "../../Atoms/RectangleButton/RectangleButton";
import { useDispatch } from "react-redux";
import { register, login } from "../../../redux/auth/operations";

const AuthForm = ({ isRegister }) => {
  const dispatch = useDispatch();
  const onSubmitRegister = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({ name: form.name, email: form.email, password: form.password })
    );
  };
  const onSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(login({ email: form.email.value, password: form.password.value }));
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.AuthForm}
        onSubmit={isRegister ? onSubmitRegister : onSubmitLogin}
      >
        {isRegister && <h1 className={styles.title}>{"Sign up"}</h1>}
        {!isRegister && <h1 className={styles.title}>{"Sign in"}</h1>}
        <div className={styles.inputContainer}>
          {isRegister && (
            <RectangleInput isName={true} placeholderText={"Name"} />
          )}
          <RectangleInput isEmail={true} placeholderText={"Email"} />
          <RectangleInput isPassword={true} placeholderText={"Password"} />
        </div>
        {isRegister && <RectangleButton title="Sign up" type="submit" />}
        {!isRegister && <RectangleButton title="Sign in" type="submit" />}
      </form>
      {!isRegister && (
        <Link to="/register" className={styles.link}>
          Registration
        </Link>
      )}
      {isRegister && (
        <Link to="/signin" className={styles.link}>
          Sign in
        </Link>
      )}
    </div>
  );
};

export { AuthForm };
