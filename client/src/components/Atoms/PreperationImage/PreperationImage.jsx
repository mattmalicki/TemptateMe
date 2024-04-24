import styles from "./PreperationImage.module.css";

const PreperationImage = ({ src, alt }) => {
  return <img alt={alt} src={src} className={styles.PreperationImage} />;
};

export { PreperationImage };
