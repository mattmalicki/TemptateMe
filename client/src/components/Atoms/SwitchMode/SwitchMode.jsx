import styles from "./SwitchMode.module.css";

const SwitchMode = () => {
  const dark = false;
  return (
    <label className={styles.SwitchMode}>
      <input type="checkbox" className={styles.input} checked={`${dark}`} />
      <span className={styles.slider}></span>
    </label>
  );
};

export { SwitchMode };
