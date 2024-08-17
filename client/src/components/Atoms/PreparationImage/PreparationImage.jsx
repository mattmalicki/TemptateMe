import styles from "./PreparationImage.module.css";

const PreparationImage = ({ src, alt }) => {
  return <img alt={alt} src={src} className={styles.PreparationImage} />;
};

export { PreparationImage };
