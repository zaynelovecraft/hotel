import React from "react";
import Footer from "./Footer";

import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>

      <NavBar/>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
