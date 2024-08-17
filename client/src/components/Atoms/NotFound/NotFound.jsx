import styles from "./NotFound.module.css";
import image from "../../../images/not_found.png";

const NotFound = ({ title }) => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.image}>
        <img src={image} alt="Not found" width="100%" height="100%" />
      </div>
      <span className={styles.text}>{title}</span>
    </div>
  );
};

export { NotFound };
