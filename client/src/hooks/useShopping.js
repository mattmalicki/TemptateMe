import { useSelector } from "react-redux";
import {
  selectShoppingListIsLoading,
  selectShoppingList,
  selectShoppingListError,
} from "../redux/shopping/selectors.js";

const useShopping = () => {
  const isLoading = useSelector(selectShoppingListIsLoading);
  const shoppingList = useSelector(selectShoppingList);
  const error = useSelector(selectShoppingListError);

  return {
    isLoading,
    shoppingList,
    error,
  };
};

export default useShopping;
