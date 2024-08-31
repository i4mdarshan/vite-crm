import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* <header>Auth Header</header> */}
      <main className='flex items-center justify-center min-h-screen'>
        <Outlet />
      </main>
      {/* <footer>Auth Footer</footer> */}
    </div>
  );
};

export default AuthLayout;
