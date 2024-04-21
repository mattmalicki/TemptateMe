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
  const categoriesTitles = categories.map((item) => item.title);

  return {
    isLoading,
    categories,
    categoriesTitles,
    error,
  };
};

export default useShopping;
