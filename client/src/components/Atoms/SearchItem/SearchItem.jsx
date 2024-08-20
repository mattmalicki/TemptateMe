import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./SearchItem.module.css";
import { Link } from "react-router-dom";

const SearchItem = ({ id, title, imgSrc }) => {
  const { isDark } = useDarkMode();
  return (
    <Link to={`/recipe/${id}`}>
      <div className={styles.SearchItem}>
        <span className={[styles.title, isDark && styles.isDark].join(" ")}>
          {title}
        </span>
        <img src={imgSrc} alt={title} className={styles.image} />
      </div>
    </Link>
  );
};

export { SearchItem };
