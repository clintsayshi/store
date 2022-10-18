import React, { useState } from "react";
import {
  FiMenu,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Test() {
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
    <div>
      <nav className="border-b-2 border-black">
        <div className="container py-4 flex justify-between items-center ">
          <Link className="font-medium" to="/">
            Sportie shoe
          </Link>

          <ul className="hidden sm:flex gap-4">
            {links.map(([title, url], index) => (
              <li key={index}>
                <Link
                  className="text-base text-gray-500 hover:text-black"
                  to={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 justify-between">
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

              <div className="absolute space-y-2 w-36 shadow-sm bg-white p-4 flex-col flex right-0 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <header className="w-full py-2">
                  <h2 className="text-lg text-gray-800">Account</h2>
                </header>

                <ul className="space-y-1">
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
                    <button className="text-sm text-gray-500 hover:text-black">
                      Logout
                    </button>
                  </li>
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
                <Link
                  className="text-xl flex items-center gap-4"
                  to="/profile/orders"
                >
                  <FiUser />
                  <span className="text-xl">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg flex items-center gap-4"
                  to="/profile/orders"
                >
                  <FiShoppingCart />
                  <span className="text-xl">Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg flex items-center gap-4"
                  to="/profile/orders"
                >
                  <FiShoppingBag />
                  <span className="text-xl">Bag</span>
                </Link>
              </li>

              <li>
                <button className="w-full mt-2 text-left text-xl">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Test;

/* 

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
          </ul>
        </div>
      </nav>

*/
