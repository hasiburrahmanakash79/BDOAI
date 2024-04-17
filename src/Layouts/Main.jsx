
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav/>
      <div className="min-h-[calc(100vh-239px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
