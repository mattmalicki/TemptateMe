import styles from "./SwitchMode.module.css";
import { useDarkMode } from "../../../context/DarkModeContext";

const SwitchMode = () => {
  const { isDark, setDarkMode } = useDarkMode();
  return (
    <label className={styles.SwitchMode}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isDark}
        onChange={setDarkMode}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export { SwitchMode };
