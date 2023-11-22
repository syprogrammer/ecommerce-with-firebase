import "../index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Suspense, lazy} from "react";
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

const About = lazy(() => import("./pages/About"));

export default function App() {

  const isAuthenticated = useAuth();
  console.log("authenticated", isAuthenticated);
  const isOnline = useOnlineStatus();
  console.log("online",isOnline)
  if(!isOnline){
    return <h1>User is offline</h1>
  }
  const userData = useSelector((store) => store.auth.userData);

  

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      console.log("not authenticated");
      return <Navigate to="/login" />;
    } else if (!userData.name) {
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
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/editprofile",
          element: (
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
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
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/product/:prodId",
          element: <ProductDescription />,
        },
      ],
    },{
      path: "/order",
      element: <OrderLayout/>,
      errorElement: <Error />,
      children: [
        {
          path: "/order",
          element:<OrderAddress/>
        },
        {
          path: "/order/summary",
          element:<OrderSummary/>
        },
        {
          path: "/order/payment",
          element:<OrderPayment/>
        },
      ]
    }
  ]);

  return <RouterProvider router={appRouter} />;
}
