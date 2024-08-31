import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='main-layout'>
      <header>Main Header</header>
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;
