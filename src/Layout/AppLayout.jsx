import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AppLayout = () => {
   
    return (
      <>
        <div className="flex flex-col">
          <div className="border-b-2 border-white h-[90px] lg:h-[60px]">
            <Navbar />
          </div>
          <div className="bg-gray-100 min-h-[70vh] max-h-fit pb-5">
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
    );
  };

  export default AppLayout