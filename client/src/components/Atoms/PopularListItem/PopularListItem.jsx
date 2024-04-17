import styles from "./PopularListItem.module.css";

const PopularListItem = ({ recipe }) => {
  return (
    <div className={styles.PopularListItem}>
      <img className={styles.image} src={recipe.preview} alt={recipe.title} />
      <div className={styles.info}>
        <p className={styles.title}>{recipe.title}</p>
        <span className={styles.about}>{recipe.description}</span>
      </div>
    </div>
  );
};

export { PopularListItem };
