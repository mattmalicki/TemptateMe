import { useSelector } from "react-redux";
import {
  selectCategoriesLoading,
  selectCategories,
  selectCategoriesError,
} from "../redux/categories/selectors.js";

const useShopping = () => {
  const isLoading = useSelector(selectCategoriesLoading);
  const categories = useSelector(selectCategories);
  const error = useSelector(selectCategoriesError);

  return {
    isLoading,
    categories,
    error,
  };
};

export default useShopping;
