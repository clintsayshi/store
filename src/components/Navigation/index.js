import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";

function Navigation() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const signIn = () => {
    loginWithRedirect();
  };
  const signOut = () => {
    logout({ returnTo: window.location.origin });
  };

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
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={signOut}>Log out</button>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li>
                <button onClick={signIn}>Log in</button>
              </li>
            )}
            {/*  <li>
              <button className="border">
                <FiMenu />
              </button>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
