import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function Layout() {
  const [recipeList, setRecipeList] = useState([{ number: 1, text: "Recipe" }]);
  const renderList = recipeList.map((item) => {
    return (
      <li key={item.number}>
        <a>{`${item.text} ${item.number}`}</a>
      </li>
    );
  });

  return (
    <>
      <NavBar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            My Recipes
          </label>
          <main className="md:w-1/2 w-10/12 mx-auto">
            <Outlet />
          </main>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {renderList}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Layout;
