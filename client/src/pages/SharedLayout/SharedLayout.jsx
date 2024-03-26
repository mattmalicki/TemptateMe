import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { Loader } from 'components/atoms/Loader/Loader';
import { Footer } from "../../components/Organisms/Footer/Footer.jsx";
import { Header } from "../../components/Organisms/Header/Header.jsx";

const SharedLayout = () => {
  const isLogged = true;
  return (
    <div>
      {isLogged && <Header />}
      <Suspense fallback={"loading"}>
        <Outlet />
      </Suspense>
      {isLogged && <Footer />}
    </div>
  );
};

export { SharedLayout };
