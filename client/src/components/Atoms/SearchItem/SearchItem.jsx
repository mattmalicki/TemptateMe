import styles from "./SearchItem.module.css";

const SearchItem = ({ title, imgSrc }) => {
  return (
    <div className={styles.SearchItem}>
      <span className={styles.title}>{title}</span>
      <img src={imgSrc} alt={title} className={styles.image} />
    </div>
  );
};

export { SearchItem };
