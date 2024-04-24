import { useDispatch } from "react-redux";
import styles from "./IngredientsListItem.module.css";
import {
  addProduct,
  deleteProduct,
} from "../../../redux/shopping/operations.js";

const IngredientsListItem = ({ ingredient, measure }) => {
  const dispatch = useDispatch();

  const onChange = (event) => {
    if (event.target.checked) {
      dispatch(addProduct({ id: ingredient.id, measure }));
    } else {
      dispatch(deleteProduct({ id: ingredient.id, measure }));
    }
  };
  return (
    <li className={styles.IngredientsListItem}>
      <div className={styles.name}>
        <img
          alt={ingredient.ttl}
          src={ingredient.thb}
          className={styles.image}
        />
        <span>{ingredient.ttl}</span>
      </div>
      <div className={styles.numberList}>
        <div className={styles.measure}>{measure}</div>
        <input type="checkbox" className={styles.list} onChange={onChange} />
      </div>
    </li>
  );
};

export { IngredientsListItem };
