import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../../hooks/index";
import { PrivateRoute } from "../../components/Atoms/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../../components/Atoms/RestrictedRoute/RestrictedRoute";

import { HomePage } from "../Home/HomePage.jsx";
import { AuthPage } from "../Auth/AuthPage.jsx";
import { StartPage } from "../Start/StartPage.jsx";
import { FavoritesPage } from "../Favorites/Favorites.jsx";
import { AddRecipePage } from "../AddRecipe/AddRecipe.jsx";
import { MyRecipesPage } from "../MyRecipes/MyRecipes.jsx";
import { ShoppingPage } from "../Shopping/Shopping.jsx";
import { SharedLayout } from "../SharedLayout/SharedLayout.jsx";
import { CategoriesPage } from "../Categories/CategoriesPage.jsx";
import { SearchRecipePage } from "../SearchRecipe/SearchRecipe.jsx";

import styles from "./App.module.css";
import { refresh } from "../../redux/auth/operations.js";
import { Recipe } from "../../components/Templates/Recipe/Recipe.jsx";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return isRefreshing ? (
    <div style={{ color: "black", fontSize: "56px" }}>Refreshing</div>
  ) : (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/home" component={<StartPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<AuthPage isRegister={true} />}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<AuthPage isRegister={false} />}
              />
            }
          ></Route>
          {/* <Route path="/home" element={<Test />} /> */}
          <Route
            path="/home"
            element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
          />
          <Route
            path="/categories"
            element={
              <PrivateRoute redirectTo="/" component={<CategoriesPage />} />
            }
          />
          <Route
            path="/addRecipe"
            element={
              <PrivateRoute redirectTo="/" component={<AddRecipePage />} />
            }
          />
          <Route
            path="/myRecipes"
            element={
              <PrivateRoute redirectTo="/" component={<MyRecipesPage />} />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
            }
          />
          <Route
            path="/shopping"
            element={
              <PrivateRoute redirectTo="/" component={<ShoppingPage />} />
            }
          />
          <Route
            path="/searchRecipes/*"
            element={
              <PrivateRoute redirectTo="/" component={<SearchRecipePage />} />
            }
          />
          <Route
            path="/recipe/*"
            element={<PrivateRoute redirectTo="/" component={<Recipe />} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
