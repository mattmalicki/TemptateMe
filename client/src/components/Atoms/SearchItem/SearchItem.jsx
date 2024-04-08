import styles from "./SearchItem.module.css";
import { Link } from "react-router-dom";

const SearchItem = ({ id, title, imgSrc }) => {
  return (
    <Link to={`/searchRecipes/${id}`}>
      <div className={styles.SearchItem}>
        <span className={styles.title}>{title}</span>
        <img src={imgSrc} alt={title} className={styles.image} />
      </div>
    </Link>
  );
};

export { SearchItem };
