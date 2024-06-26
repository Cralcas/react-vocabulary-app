import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";

export const Layout = () => {
  return (
    <section className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
};
