import styles from "./SwitchMode.module.css";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useEffect } from "react";

const SwitchMode = () => {
  const { isDark, setDarkMode } = useDarkMode();
  useEffect(() => {
    JSON.parse(localStorage.getItem("isDark-theme")) && setDarkMode();
  }, []);
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
