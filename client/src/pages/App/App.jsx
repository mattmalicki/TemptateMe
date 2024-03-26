import { useEffect, lazy } from "react";
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

// const StartPage = lazy(() => import("../Start/StartPage.jsx"));
// const AuthPage = lazy(() => import("../Auth/AuthPage.jsx"));

function App() {
  return (
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
          <Route path="/testing" element={"testing"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
