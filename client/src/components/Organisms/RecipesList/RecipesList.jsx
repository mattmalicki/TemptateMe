import styles from "./RecipesList.module.css";
import { SearchItem } from "../../Atoms/SearchItem/SearchItem.jsx";
import { useRecipes } from "../../../hooks/index.js";
import { fetchRecipeById } from "../../../redux/recipes/operations.js";
import { useDispatch } from "react-redux";

const RecipesList = () => {
  const dispatch = useDispatch();
  const { recipes } = useRecipes();
  const onClick = (id) => {
    dispatch(fetchRecipeById(id));
  };
  return (
    Array.isArray(recipes) && (
      <ul className={styles.RecipesList}>
        {recipes.map((recipe, index) => (
          <li
            onClick={() => {
              onClick(recipe._id);
            }}
            key={recipe._id}
            className={styles.RecipesListItem}
          >
            <SearchItem
              id={recipe._id}
              title={recipe.title}
              imgSrc={recipe.thumb}
            />
          </li>
        ))}
      </ul>
    )
  );
};

export { RecipesList };
