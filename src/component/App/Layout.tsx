import { Outlet } from "react-router-dom";
import { Header } from "component/App/Header";
import { Footer } from "component/App/Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <div className="container md:mt-12 mt-52 text-center mx-auto bg-slate-100">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
