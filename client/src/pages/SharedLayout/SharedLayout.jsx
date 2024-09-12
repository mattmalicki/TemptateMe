import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { Loader } from 'components/atoms/Loader/Loader';
import { Footer } from "../../components/Organisms/Footer/Footer.jsx";
import { Header } from "../../components/Organisms/Header/Header.jsx";

import { useAuth } from "../../hooks/index.js";
import { Loader } from "../../components/Atoms/Loader/Loader.jsx";

const SharedLayout = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  return (
    <div>
      {isLoggedIn && <Header />}
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "#00000080",
            }}
          >
            <Loader />
          </div>
        }
      >
        {isRefreshing ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "#00000080",
            }}
          >
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </Suspense>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export { SharedLayout };
