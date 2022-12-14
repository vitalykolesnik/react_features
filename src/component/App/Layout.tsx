import { Outlet } from "react-router-dom";
import { Header } from "component/App/Header";
import { Footer } from "component/App/Footer";

export const Layout = () => {
  return (
    <>
      <Header />

      <div className="container mt-10 text-center mx-auto bg-slate-100">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
