import styles from "./PreparationList.module.css";
import { PreparationListItem } from "../../Molecules/PreparationListItem/PreparationListItem.jsx";
import { PreparationImage } from "../../Atoms/PreparationImage/PreparationImage.jsx";

const PreparationList = ({ preparation, src, alt }) => {
  return (
    <div className={styles.PreparationList}>
      <div>
        <h3 className={styles.header}>Recipe preparations</h3>
        <ul className={styles.list}>
          {preparation.split("\n").map((step, index) => (
            <PreparationListItem key={index} stepNumber={index} step={step} />
          ))}
        </ul>
      </div>
      <PreparationImage src={src} alt={alt} />
    </div>
  );
};

export { PreparationList };
