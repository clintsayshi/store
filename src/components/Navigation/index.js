import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="border-b-2 border-black">
        <div className="container py-4 flex justify-between items-center ">
          <Link className="font-medium" to="/">
            Sportie shoe
          </Link>

          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Sign in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
