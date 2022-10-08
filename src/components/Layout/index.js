import React from "react";
import Navigation from "../Navigation";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Navigation />
        <main className="">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
