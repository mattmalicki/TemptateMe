import styles from "./SwitchMode.module.css";

const SwitchMode = () => {
  let dark = false;
  const onChange = () => {
    dark = !dark;
  };
  return (
    <label className={styles.SwitchMode}>
      <input
        type="checkbox"
        className={styles.input}
        checked={dark}
        onChange={onChange}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export { SwitchMode };
