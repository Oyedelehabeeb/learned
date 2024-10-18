import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full h-16 fixed top-0 z-10 ">
        <Header />
      </header>

      <div className="flex flex-1 pt-16">
        <aside className="w-64 h-[calc(100vh-4rem)] fixed top-16 left-0">
          <SideBar />
        </aside>

        <main className="ml-64 flex-1 p-6 md:overflow-auto  bg-beige text-darkGray">
          <Outlet />
        </main>
      </div>

      <footer className="w-full text-white p-4 bg-darkGray text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
