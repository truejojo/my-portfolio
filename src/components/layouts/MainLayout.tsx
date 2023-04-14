import { Outlet } from "react-router-dom";
import Header from "../main/Header";
import Footer from "../main/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
