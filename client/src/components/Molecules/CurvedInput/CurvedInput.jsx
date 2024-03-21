import styles from "./CurvedInput.module.css";
import CurvedButton from "../../Atoms/CurvedButton.jsx";

const CurvedInput = ({
  placeholderText,
  buttonText,
  onChange = () => {},
  onClick = () => {},
}) => {
  const isDark = false;
  const labelClasses = `${styles.CurvedButton} ${isDark && styles.dark}`;
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
          greenOrBlack="black"
          onClick={onClick}
        />
      )}
      {isDark && (
        <CurvedButton
          title={buttonText}
          greenOrBlack="green"
          onClick={onClick}
        />
      )}
    </label>
  );
};

export { CurvedInput };
