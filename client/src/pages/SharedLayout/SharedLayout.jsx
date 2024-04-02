import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { Loader } from 'components/atoms/Loader/Loader';
import { Footer } from "../../components/Organisms/Footer/Footer.jsx";
import { Header } from "../../components/Organisms/Header/Header.jsx";

import { useAuth } from "../../hooks/index.js";

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn && <Header />}
      <Suspense fallback={"loading"}>
        <Outlet />
      </Suspense>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export { SharedLayout };
