import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.css";
import { ReactComponent as SearchIcon } from "./icon-search.svg";

const NavHeader = () => {
  return (
    <div className={styles.NavHeader}>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Categories
      </NavLink>
      <NavLink
        to="/addRecipe"
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Add recipes
      </NavLink>
      <NavLink
        to="/myRecipes"
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        My recipes
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Favorites
      </NavLink>
      <NavLink
        to="/shopping"
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Shopping list
      </NavLink>
      <NavLink
        to="/searchRecipes"
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        <SearchIcon />
        <span className={styles.searchText}>Search</span>
      </NavLink>
    </div>
  );
};

export { NavHeader };
