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
import { Loader } from "../../components/Atoms/Loader/Loader.jsx";

import styles from "./App.module.css";
import { refresh } from "../../redux/auth/operations.js";
import { Recipe } from "../../components/Templates/Recipe/Recipe.jsx";
import { useDarkMode } from "../../context/DarkModeContext.js";
import { NotFoundPage } from "../NotFound/NotFound.jsx";
import { Helmet } from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { isDark } = useDarkMode();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return isRefreshing ? (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#00000080" }}
    >
      <Loader />
    </div>
  ) : (
    <div className={[styles.App, isDark && styles.isDark].join(" ")}>
      <Helmet>
        <title>Temptate Me</title>
      </Helmet>
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
          <Route
            path="*"
            element={
              <PrivateRoute redirectTo="/" component={<NotFoundPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
