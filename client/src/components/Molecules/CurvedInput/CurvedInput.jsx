import styles from "./CurvedInput.module.css";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";

const CurvedInput = ({
  placeholderText,
  buttonText,
  greenOrBlack,
  onChange = () => {},
  onClick = () => {},
}) => {
  const isDark = false;
  const labelClasses = `${styles.CurvedInput} ${isDark ? styles.dark : ""}`;
  return (
    <label className={labelClasses}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholderText}
        onChange={onChange}
      />
      {!isDark && (
        <CurvedButton
          title={buttonText}
          greenOrBlack={greenOrBlack}
          onClick={onClick}
        />
      )}
      {isDark && (
        <CurvedButton
          title={buttonText}
          greenOrBlack={greenOrBlack}
          onClick={onClick}
        />
      )}
    </label>
  );
};

export { CurvedInput };
