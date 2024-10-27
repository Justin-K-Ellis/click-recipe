import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="md:w-1/2 w-10/12 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
