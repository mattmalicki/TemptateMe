import { useDispatch } from "react-redux";
import styles from "./ShoppingListItem.module.css";
import { deleteProduct } from "../../../redux/shopping/operations";

const ShoppingListItem = ({ listItem, measure, recipeId }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log({ id: listItem._id, measure, recipeId });
    dispatch(deleteProduct({ id: listItem._id, measure, recipeId }));
  };

  return (
    listItem && (
      <li className={styles.ShoppingListItem}>
        <div className={styles.name}>
          <img alt={listItem.ttl} src={listItem.thb} className={styles.image} />
          <span>{listItem.ttl}</span>
        </div>
        <div className={styles.numberList}>
          <div className={styles.measure}>{measure}</div>
          <button type="button" onClick={onClick} className={styles.list}>
            X
          </button>
        </div>
      </li>
    )
  );
};

export { ShoppingListItem };
