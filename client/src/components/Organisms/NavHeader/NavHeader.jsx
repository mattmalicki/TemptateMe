import { NavLink } from "react-router-dom";
import styles from "./NavHeader.module.css";
import { ReactComponent as SearchIcon } from "./icon-search.svg";

const NavHeader = () => {
  return (
    <div className={styles.NavHeader}>
      <NavLink
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Categories
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Add recipes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        My recipes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Favorites
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && `${styles.links} ${styles.Active}`
        }
      >
        Shopping list
      </NavLink>
      <NavLink
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
