import { useRecipes } from "../../../hooks";
import styles from "./HomeRecipes.module.css";
import { HomeRecipesList } from "../../Molecules/HomeRecipesList/HomeRecipesList.jsx";
import { Link } from "react-router-dom";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";
import { RectangleButton } from "../../Atoms/RectangleButton/RectangleButton.jsx";
import { useDarkMode } from "../../../context/DarkModeContext.js";

const HomeRecipes = () => {
  const { recipes, isLoading } = useRecipes();
  const { isDark } = useDarkMode();
  return isLoading ? (
    <div>Loading</div>
  ) : (
    Array.isArray(recipes) && (
      <ul className={styles.HomeRecipes}>
        {recipes.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              <span
                className={[styles.categoryTitle, isDark && styles.isDark].join(
                  " "
                )}
              >
                {item.category}
              </span>
              <HomeRecipesList recipes={item.recipes?.recipes} />
              <Link
                className={styles.button}
                to={`/categories?category=${item.category}`}
              >
                <RectangleButton title="See all" />
              </Link>
            </li>
          );
        })}
        <li className={styles.otherButton}>
          <Link to="/categories">
            {!isDark && (
              <CurvedButton title="Other categories" isTransparent={true} />
            )}
            {isDark && (
              <CurvedButton
                title="Other categories"
                greenOrBlack=""
                isTransparent={true}
              />
            )}
          </Link>
        </li>
      </ul>
    )
  );
};

export { HomeRecipes };
