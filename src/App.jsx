import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "../index.css";
import { Suspense, lazy, useContext } from "react";
import RestaurantMenu from "./pages/ProductDescription";
import Error from "./components/Error";
import { ThemeContext } from "./context/themeContext";
import useOnlineStatus from "./hooks/useOnlineStatus";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
const About = lazy(() => import("./pages/About"));

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  const { lightMode, toggle } = useContext(ThemeContext);
  console.log(isOnline);
  if (!isOnline) {
    return <div>You are offline please check your internet connection</div>;
  }

  return (
    <>
      <div
        className={`${
          lightMode ? "bg-white" : "bg-black text-white"
        } min-h-[100vh]`}
      >
        <div className="border-b-2 border-white">
          <Navbar />
        </div>
        <Outlet />
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
