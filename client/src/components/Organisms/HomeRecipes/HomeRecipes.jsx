import { useRecipes } from "../../../hooks";
import styles from "./HomeRecipes.module.css";
import { HomeRecipesList } from "../../Molecules/HomeRecipesList/HomeRecipesList.jsx";
import { Link } from "react-router-dom";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";
import { RectangleButton } from "../../Atoms/RectangleButton/RectangleButton.jsx";

const HomeRecipes = () => {
  const { recipes, isLoading } = useRecipes();
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <ul className={styles.HomeRecipes}>
      {recipes.map((item, index) => {
        return (
          <li key={index} className={styles.listItem}>
            <span className={styles.categoryTitle}>{item.category}</span>
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
          <CurvedButton title="Other categories" greenOrBlack="green" />
        </Link>
      </li>
    </ul>
  );
};

export { HomeRecipes };
