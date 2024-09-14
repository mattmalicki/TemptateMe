import styles from "./HomeRecipesList.module.css";
import { SearchItem } from "../../Atoms/SearchItem/SearchItem.jsx";
import { fetchRecipeById } from "../../../redux/recipes/operations.js";
import { useDispatch } from "react-redux";

const HomeRecipesList = ({ recipes }) => {
  const dispatch = useDispatch();
  const onClick = (id) => {
    dispatch(fetchRecipeById(id));
  };
  return (
    recipes && (
      <ul className={styles.HomeRecipesList}>
        {recipes.map((recipe) => (
          <li
            className={styles.listItem}
            key={recipe._id}
            onClick={() => {
              onClick(recipe._id);
            }}
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

export { HomeRecipesList };
