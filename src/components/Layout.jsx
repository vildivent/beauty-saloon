import { Outlet, useMatch } from "react-router-dom";
import { Footer, Navbar } from "./UI";

export const Layout = () => {
  const match = useMatch("/");
  return (
    <>
      <Navbar isHomePage={match} />
      <Outlet />
      <Footer />
    </>
  );
};
