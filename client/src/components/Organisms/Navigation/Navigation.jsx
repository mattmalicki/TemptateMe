import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { ReactComponent as SearchIcon } from "./icon-search.svg";

const Navigation = ({ isFooter = false }) => {
  return (
    <ul className={`${isFooter ? styles.NavFooter : styles.NavHeader}`}>
      <li>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive && `${styles.links} ${styles.Active}`
          }
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addRecipe"
          className={({ isActive }) =>
            isActive && `${styles.links} ${styles.Active}`
          }
        >
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myRecipes"
          className={({ isActive }) =>
            isActive && `${styles.links} ${styles.Active}`
          }
        >
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive && `${styles.links} ${styles.Active}`
          }
        >
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shopping"
          className={({ isActive }) =>
            isActive && `${styles.links} ${styles.Active}`
          }
        >
          Shopping list
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/searchRecipes"
          className={({ isActive }) =>
            isActive && `${styles.links} ${styles.Active}`
          }
        >
          <SearchIcon />
          <span className={styles.searchText}>Search</span>
        </NavLink>
      </li>
    </ul>
  );
};

export { Navigation };
