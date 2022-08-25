import { useState } from "react";
import { Outlet, useMatch } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./UI";
import { Context } from "../context";

export const Layout = () => {
  const match = useMatch("/");

  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

  return (
    <>
      <Context.Provider value={{ sidebarIsOpened, setSidebarIsOpened }}>
        <Navbar isHomePage={match} />
        <Sidebar sidebarIsOpened={sidebarIsOpened} />
      </Context.Provider>
      <Outlet />
      <Footer />
    </>
  );
};
