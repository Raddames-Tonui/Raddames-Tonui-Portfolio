// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col no-scrollbar">
      <Navbar className=""/>
      <main className="flex-grow no-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
