import styles from "./RecipeDetails.module.css";
import { CurvedButton } from "../../Atoms/CurvedButton/CurvedButton.jsx";
import { addToFavorites } from "../../../redux/recipes/operations.js";
import { useDispatch } from "react-redux";
import { RectComponent as IconClock } from "./icon-clock.svg";

const RecipeDetails = ({ recipe }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addToFavorites(recipe._id));
  };
  return (
    <div className={styles.RecipeDetails}>
      <h2 className={styles.title}>{recipe.title}</h2>
      <p className={styles.info}>{recipe.description}</p>
      <CurvedButton onClick={onClick} />
      <div className={styles.time}>
        <div className={styles.icon}>
          <IconClock />
        </div>{" "}
        {recipe.time} min
      </div>
    </div>
  );
};

export { RecipeDetails };
