import { useDispatch } from "react-redux";
import styles from "./ShoppingListItem.module.css";
import { deleteProduct } from "../../../redux/shopping/operations";

const ShoppingListItem = ({ id, listItem, measure }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteProduct({ id }));
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
