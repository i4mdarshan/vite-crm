import { Outlet } from "react-router-dom";

const MainLayout = () => {
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
