import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./Layout.scss";

export const Layout = () => {
  return (
    <section className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
};
