import React from "react";
import { Link } from "react-router-dom";

function TabNavigation() {
  return (
    <>
      <ul className="container py-2 flex items-center gap-4">
        <li>
          <Link
            to="/items"
            className="px-2 border-b-2 border-white hover:border-black"
          >
            All
          </Link>
        </li>
        <li>
          <button className="px-2 border-b-2 border-white hover:border-black">
            Men
          </button>
        </li>
        <li>
          <button className="px-2 border-b-2 border-white hover:border-black">
            Women
          </button>
        </li>
      </ul>
    </>
  );
}

export default TabNavigation;
