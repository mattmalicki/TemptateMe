import styles from "./PreparationListItem.module.css";

const PreparationListItem = ({ stepNumber, step }) => {
  return (
    <li className={styles.PreparationListItem}>
      <div className={styles.number}>{stepNumber}</div>
      <div className={styles.step}>{step}</div>
    </li>
  );
};

export { PreparationListItem };
