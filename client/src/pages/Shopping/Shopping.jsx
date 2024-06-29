import styles from "./Shopping.module.css";
import { useDispatch } from "react-redux";
import { fetchShoppingList } from "../../redux/shopping/operations";
import { useEffect } from "react";
import { PageTitle } from "../../components/Atoms/PageTitle/PageTitle";
import { ShoppingList } from "../../components/Organisms/ShoppingList/ShoppingList";
import { fetchIngredients } from "../../redux/ingredients/operations";

const ShoppingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={styles.Shopping}>
      <PageTitle title={"Shopping list"} />
      <ShoppingList />
    </div>
  );
};

export { ShoppingPage };
