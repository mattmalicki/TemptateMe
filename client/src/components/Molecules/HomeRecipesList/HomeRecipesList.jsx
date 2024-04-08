import styles from "./HomeRecipesList.module.css";
import { useWindowDimensions } from "../../../hooks/index.js";
import { SearchItem } from "../../Atoms/SearchItem/SearchItem.jsx";

const HomeRecipesList = ({ recipes }) => {
  const { width } = useWindowDimensions();
  return (
    <ul className={styles.HomeRecipesList}>
      {width < 768 && (
        <li>
          <SearchItem
            id={recipes[0]._id}
            title={recipes[0].title}
            imgSrc={recipes[0].thumb}
          />
        </li>
      )}
      {width > 768 &&
        width < 1024 &&
        recipes.map((recipe, index) => {
          if (index < 2) {
            return (
              <li key={index}>
                <SearchItem
                  id={recipe._id}
                  title={recipe.title}
                  imgSrc={recipe.thumb}
                />
              </li>
            );
          }
        })}
      {width > 1024 &&
        recipes.map((recipe) => (
          <li key={recipe._id}>
            <SearchItem
              id={recipe._id}
              title={recipe.title}
              imgSrc={recipe.thumb}
            />
          </li>
        ))}
    </ul>
  );
};

export { HomeRecipesList };
