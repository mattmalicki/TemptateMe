import { PopularListItem } from "../../Atoms/PopularListItem/PopularListItem.jsx";
import { useRecipes } from "../../../hooks/index.js";

import styles from "./PopularList.module.css";

const PopularList = () => {
  const { recipes } = useRecipes();
  return (
    <ul className={styles.AddPopularList}>
      {recipes.map((recipe, index) => (
        <PopularListItem key={index} recipe={recipe} />
      ))}
    </ul>
  );
};

export { PopularList };
