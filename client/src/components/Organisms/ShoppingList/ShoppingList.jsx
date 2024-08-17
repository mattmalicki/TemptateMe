import styles from "./ShoppingList.module.css";
import { ShoppingListItem } from "../../Molecules/ShoppingListItem/ShoppingListItem";
import { useIngredients, useShopping } from "../../../hooks/index.js";

const ShoppingList = () => {
  const { shoppingList } = useShopping();
  const { ingredients } = useIngredients();
  return (
    <>
      <div className={styles.head}>
        <span>Product</span>
        <div className={styles.numberList}>
          <span>Number</span>
          <span>Remove</span>
        </div>
      </div>
      {ingredients && (
        <ul className={styles.ShoppingList}>
          {shoppingList.map((item) => (
            <ShoppingListItem
              key={item.id}
              listItem={ingredients.filter((ing) => ing._id === item._id)[0]}
              measure={item.measure}
              recipeId={item.recipeId}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export { ShoppingList };
