import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../../hooks/index";
// import { refresh } from "../../redux/auth/operations";

// import { Layout } from 'pages/Layout/Layout';
import { PrivateRoute } from "../../components/Atoms/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../../components/Atoms/RestrictedRoute/RestrictedRoute";

import { AuthPage } from "../Auth/AuthPage.jsx";
import { StartPage } from "../Start/StartPage.jsx";
import { SharedLayout } from "../SharedLayout/SharedLayout.jsx";

import styles from "./App.module.css";

function App() {
  const { isLoggedIn, isRefreshing } = useAuth();
  return isRefreshing ? (
    <div style={{ color: "black", fontSize: "56px" }}>Refreshing</div>
  ) : (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<StartPage />} />
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
          <Route path="/testing" element={<Test />} />
          <Route
            path="/categories"
            element={<PrivateRoute redirectTo="/" component={<Test />} />}
          />
          <Route
            path="/addRecipe"
            element={<PrivateRoute redirectTo="/" component={<Test />} />}
          />
          <Route
            path="/myRecipes"
            element={<PrivateRoute redirectTo="/" component={<Test />} />}
          />
          <Route
            path="/favorites"
            element={<PrivateRoute redirectTo="/" component={<Test />} />}
          />
          <Route
            path="/shopping"
            element={<PrivateRoute redirectTo="/" component={<Test />} />}
          />
          <Route
            path="/searchRecipes"
            element={<PrivateRoute redirectTo="/" component={<Test />} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const style = {
  width: "100%",
  height: "100vh",
  fontSize: "38px",
  textAlign: "center",
  color: "black",
};

const Test = () => {
  return <div style={style}>Testing</div>;
};
