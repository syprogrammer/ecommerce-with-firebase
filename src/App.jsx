import "../index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import Error from "./components/Error";

//custom hooks
import useOnlineStatus from "./hooks/useOnlineStatus";
import useAuth from "./hooks/useAuth";
//pages
import ProductDescription from "./pages/ProductDescription";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
//layouts
import AppLayout from "./Layout/AppLayout";
import OrderLayout from "./Layout/OrderLayout";
import OrderAddress from "./components/OrderAddress";
import OrderSummary from "./components/OrderSummary";
import OrderPayment from "./components/OrderPayment";
import DashboardLayout from "./Layout/DashboardLayout";

const About = lazy(() => import("./pages/About"));

export default function App() {
  const isAuthenticated = useAuth();
  console.log("authenticated", isAuthenticated);
  const isOnline = useOnlineStatus();
  console.log("online", isOnline);
  if (!isOnline) {
    return <h1>User is offline</h1>;
  }
  const userData = useSelector((store) => store.auth.userData);
  console.log(userData, "and ", userData.name == "nouser");
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      console.log("not authenticated");
      return <Navigate to="/login" />;
    }
    if (userData.name == "nouser") {
      return <Navigate to="/editprofile" />;
    }
    return children;
  };



  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/editprofile",
          element: <EditProfile />,
        },
        {
          path: "/search/:searchquery",
          element: <Search />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:prodId",
          element: <ProductDescription />,
        },
      ],
    },
    {
      path: "/order",
      element: (
        <ProtectedRoute>
          <OrderLayout />
        </ProtectedRoute>
      ),
      // errorElement: <Error />,
      children: [
        {
          path: "/order",
          element: <OrderAddress />,
        },
        {
          path: "/order/summary",
          element: <OrderSummary />,
        },
        {
          path: "/order/payment",
          element: <OrderPayment />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
       
            <DashboardLayout />

        </ProtectedRoute>
      ),
      // errorElement: <Error />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/editprofile",
          element: <EditProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}
