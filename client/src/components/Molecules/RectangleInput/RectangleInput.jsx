import styles from "./RectangleInput.module.css";
import { ReactComponent as CorrectIcon } from "./icon-correct.svg";
import { ReactComponent as ErrorIcon } from "./icon-error.svg";
import { ReactComponent as WarningIcon } from "./icon-warning.svg";
import { ReactComponent as MailIcon } from "./icon-mail.svg";
import { ReactComponent as PasswordIcon } from "./icon-password.svg";
import { ReactComponent as NameIcon } from "./icon-name.svg";

const RectangleInput = ({
  isEmail = false,
  isPassword = false,
  isName = false,
  isError = false,
  isWarning = false,
  isCorrect = false,
  placeholderText,
  messageText,
  onChange = () => {},
}) => {
  const labelClasses = `${styles.RectangleInput} ${isError && styles.error} ${
    isWarning && styles.warning
  } ${isCorrect && styles.correct}`;
  return (
    <label className={labelClasses}>
      <div className={styles.icon}>
        {isEmail && <MailIcon />}
        {isPassword && <PasswordIcon />}
        {isName && <NameIcon />}
      </div>
      <input
        type={`${isEmail ? "email" : ""}${isPassword ? "password" : ""}${isName ? "text" : ""}`}
        id={`${isEmail ? "email" : ""}${isPassword ? "password" : ""}${isName ? "text" : ""}`}
        className={styles.input}
        placeholder={placeholderText}
        onChange={onChange}
      />
      <div className={styles.iconStatus}>
        {isError && <ErrorIcon />}
        {isWarning && <WarningIcon />}
        {isCorrect && <CorrectIcon />}
      </div>
      <span className={styles.text}>{messageText}</span>
    </label>
  );
};

export { RectangleInput };
