import styles from "./RectangleInput.module.css";
import { ReactComponent as CorrectIcon } from "./icon-correct.svg";
import { ReactComponent as ErrorIcon } from "./icon-error.svg";
import { ReactComponent as WarningIcon } from "./icon-warning.svg";
import { ReactComponent as MailIcon } from "./icon-mail.svg";
import { ReactComponent as PasswordIcon } from "./icon-password.svg";
import { ReactComponent as NameIcon } from "./icon-name.svg";
import { useState } from "react";

const RectangleInput = ({
  isEmail = false,
  isPassword = false,
  isName = false,
  placeholderText,
}) => {
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [correct, setCorrect] = useState(false);

  const onChangeName = (event) => {
    const value = event.target.value;
    const label = event.target.labels[0];
    setError(false);
    label.classList.remove(styles.error);
    if (!value) {
      setWarning(false);
      setCorrect(false);
      label.classList.remove(styles.warning);
      label.classList.remove(styles.correct);
      return;
    }
    if (value.length < 3 || value.length > 30) {
      setWarning(true);
      setCorrect(false);
      label.classList.add(styles.warning);
      label.classList.remove(styles.correct);
      return;
    }
    if (value.length >= 3 && value.length <= 30) {
      setWarning(false);
      setCorrect(true);
      label.classList.remove(styles.warning);
      label.classList.add(styles.correct);
      return;
    }
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    const label = event.target.labels[0];
    setError(false);
    label.classList.remove(styles.error);
    if (!value) {
      setWarning(false);
      setCorrect(false);
      label.classList.remove(styles.warning);
      label.classList.remove(styles.correct);
      return;
    }
    if (value.length < 6 || value.length > 20) {
      setWarning(true);
      setCorrect(false);
      label.classList.add(styles.warning);
      label.classList.remove(styles.correct);
      return;
    }
    if (value.length >= 3 && value.length <= 20) {
      setWarning(false);
      setCorrect(true);
      label.classList.remove(styles.warning);
      label.classList.add(styles.correct);
      return;
    }
  };

  const onChangeEmail = (event) => {
    const value = event.target.value;
    const label = event.target.labels[0];
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    setError(false);
    label.classList.remove(styles.error);
    if (!value) {
      setWarning(false);
      setCorrect(false);
      label.classList.remove(styles.warning);
      label.classList.remove(styles.correct);
      return;
    }
    if (!regex.test(value)) {
      setWarning(true);
      setCorrect(false);
      label.classList.add(styles.warning);
      label.classList.remove(styles.correct);
      return;
    }
    if (regex.test(value)) {
      setWarning(false);
      setCorrect(true);
      label.classList.remove(styles.warning);
      label.classList.add(styles.correct);
      return;
    }
  };

  const onInvalid = (event) => {
    event.target.labels[0].classList.add(styles.error);
    setError(true);
    setWarning(false);
    setCorrect(false);
  };

  return (
    <label className={styles.RectangleInput}>
      <div className={styles.icon}>
        {isEmail && <MailIcon />}
        {isPassword && <PasswordIcon />}
        {isName && <NameIcon />}
      </div>
      <input
        type={`${isEmail ? "email" : ""}${isPassword ? "password" : ""}${isName ? "text" : ""}`}
        id={`${isEmail ? "email" : ""}${isPassword ? "password" : ""}${isName ? "text" : ""}`}
        minLength={isPassword ? 6 : isName ? 3 : 0}
        maxLength={isPassword ? 20 : isName ? 30 : ""}
        className={styles.input}
        placeholder={placeholderText}
        onChange={(event) => {
          if (isName) return onChangeName(event);
          if (isPassword) onChangePassword(event);
          if (isEmail) onChangeEmail(event);
        }}
        required
        onInvalid={onInvalid}
      />
      <div className={styles.iconStatus}>
        {error && <ErrorIcon />}
        {warning && <WarningIcon />}
        {correct && <CorrectIcon />}
      </div>
      <span className={styles.text}>{""}</span>
    </label>
  );
};

export { RectangleInput };
