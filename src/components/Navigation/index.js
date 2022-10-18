import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FiMenu,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useGetCategoriesQuery } from "../../redux/shoesApi";
import { setCategory } from "../../redux/shopping";
import { useDispatch } from "react-redux";

function Navigation() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();

  const updateCategory = (id) => {
    dispatch(setCategory(id));
  };

  const signIn = () => {
    loginWithRedirect();
  };
  const signOut = () => {
    logout({ returnTo: window.location.origin });
  };

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const links = [
    ["Men", "/items/men"],
    ["Women", "/items/women"],
    ["Kids", "/items/kids"],
    ["Accessories", "/items/accessories"],
  ];

  const profileLinks = [
    ["Profile", "/profile"],
    ["Orders", "/profile/orders"],
  ];

  return (
    <>
      <nav className="border-b-2 border-black relative z-50">
        <div className="container py-4 flex justify-between items-center ">
          <Link className="font-medium" to="/">
            Sportie shoe
          </Link>

          <ul className="hidden sm:flex gap-4">
            <li>
              <button
                className="text-base text-gray-500 hover:text-black"
                onClick={() => updateCategory(0)}
              >
                All
              </button>
            </li>
            {data &&
              data.map(({ name, Id }, index) => (
                <li key={index}>
                  <button
                    className="text-base  capitalize text-gray-500 hover:text-black"
                    onClick={() => updateCategory(Id)}
                  >
                    {name}
                  </button>
                </li>
              ))}
          </ul>

          <div className="flex space-x-4 justify-between">
            <Link className="text-2xl font-light" to="/cart">
              <FiShoppingBag className="font-light" />
            </Link>

            <button
              onClick={() => setMenuIsOpen(true)}
              className="text-2xl sm:hidden"
            >
              <FiMenu />
            </button>

            <div className="relative hidden sm:block space-x-4 group">
              <button className="text-2xl">
                <FiUser />
              </button>

              <div className="absolute border space-y-2 w-36 shadow-sm bg-white p-4 flex-col flex right-0 transform -translate-y-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <header className="w-full py-2">
                  <h2 className="text-lg text-gray-800">Account</h2>
                </header>

                <ul className="space-y-1">
                  {isAuthenticated && (
                    <>
                      {profileLinks.map(([title, url], index) => (
                        <li key={index}>
                          <Link
                            className="text-sm text-gray-500 hover:text-black"
                            to={url}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={signOut}
                          className="text-sm text-gray-500 hover:text-black"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}

                  {!isAuthenticated && (
                    <>
                      <li>
                        <button
                          onClick={signIn}
                          className="text-sm text-gray-500 hover:text-black"
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={signIn}
                          className="text-sm text-gray-500 hover:text-black"
                        >
                          Sign up
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`absolute top-0 bottom-0 right-0 w-2/3 pl-6 pr-2 py-4 space-y-6 ${
            menuIsOpen
              ? "pointer-events-auto opacity-100 transition-transform duration-150 translate-x-0"
              : "pointer-events-none opacity-0 transform transition-transform duration-150 -translate-x-4"
          }   bg-white border-l-2 border-black sm:hidden `}
        >
          <div className="w-full">
            <button
              onClick={() => setMenuIsOpen(false)}
              className="block ml-auto p-1 text-2xl"
            >
              <FiX />
            </button>
          </div>

          <div>
            <header className="w-full mb-2">
              <h2 className="text-lg text-gray-800">Shop</h2>
            </header>

            <ul className="space-y-2">
              {links.map(([title, url], index) => (
                <li key={index}>
                  <Link className="text-2xl" to={url}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <header className="w-full mb-2">
              <h2 className="text-lg text-gray-800">Account</h2>
            </header>

            <ul className="space-y-2">
              <li>
                <Link className="text-xl flex items-center gap-4" to="/profile">
                  <FiUser />
                  <span className="text-xl">Profile</span>
                </Link>
              </li>
              <li>
                <Link className="text-lg flex items-center gap-4" to="/profile">
                  <FiShoppingCart />
                  <span className="text-xl">Orders</span>
                </Link>
              </li>
              <li>
                <Link className="text-lg flex items-center gap-4" to="/cart">
                  <FiShoppingBag />
                  <span className="text-xl">Bag</span>
                </Link>
              </li>

              <li>
                <button
                  onClick={signOut}
                  className="w-full mt-2 text-left text-xl"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
