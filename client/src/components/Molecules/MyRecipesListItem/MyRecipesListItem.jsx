import styles from "./MyRecipesListItem.module.css";
import { ReactComponent as TrashIcon } from "./icon-trash.svg";
import { Link } from "react-router-dom";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";
import { useDispatch } from "react-redux";
import { fetchRecipeById } from "../../../redux/recipes/operations.js";

const MyRecipesListItem = ({ recipe, isFavorites = false }) => {
  const dispatch = useDispatch();
  const onClick = (id) => {
    dispatch(fetchRecipeById(id));
  };
  return (
    <li className={styles.MyRecipesListItem}>
      <img alt="Delicious recipe" src={recipe.thumb} className={styles.image} />
      <div className={styles.info}>
        <div
          className={`${styles.trash} ${isFavorites ? styles.favorites : ""}`}
        >
          <TrashIcon />
        </div>
        <p className={styles.title}>{recipe.title}</p>
        <span className={styles.description}>{recipe.description}</span>
        <div className={recipe.timeButton}>
          <span>{recipe.time}</span>
          <Link to={`/searchRecipes/${recipe._id}`} className={styles.button}>
            <CurvedButton
              size="small"
              greenOrBlack={`${isFavorites ? "black" : "green"}`}
              onClick={() => {
                onClick(recipe._id);
              }}
            >
              See recipe
            </CurvedButton>
          </Link>
        </div>
      </div>
    </li>
  );
};

export { MyRecipesListItem };
