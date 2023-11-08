import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "../index.css";
import { Suspense, lazy, useContext } from "react";
import RestaurantMenu from "./pages/ProductDescription";
import Error from "./components/Error";

import useOnlineStatus from "./hooks/useOnlineStatus";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import SearchContainer from "./components/SearchContainer";
const About = lazy(() => import("./pages/About"));

const AppLayout = () => {
  const isOnline = useOnlineStatus();
 
  console.log(isOnline);
  if (!isOnline) {
    return <div>You are offline please check your internet connection</div>;
  }

  return (
    <>
      <div
     className="flex flex-col"
      >
        <div className="border-b-2 border-white h-[92px]">
          <Navbar />
        </div>
        <div className="bg-gray-100  pb-5">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:searchquery",
        element: <Search/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment/>,
      },
      {
        path: "/product/:prodId",
        element: <ProductDescription />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
