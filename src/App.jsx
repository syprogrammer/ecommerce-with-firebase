import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../index.css";
import { Suspense, lazy, useContext, useEffect } from "react";
import RestaurantMenu from "./pages/ProductDescription";
import Error from "./components/Error";

import useOnlineStatus from "./hooks/useOnlineStatus";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import SearchContainer from "./components/SearchContainer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { saveToken } from "./redux/slices/userSlice";
import useUserinfo from "./hooks/useUserinfo";
const About = lazy(() => import("./pages/About"));

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  console.log(isOnline);
  if (!isOnline) {
    return <div>You are offline please check your internet connection</div>;
  }

  const userAuth = useSelector((store) => store.auth.userAuth);
  // console.log("userauthtoken", user);
  const dispatch = useDispatch();
  
  const getUserData =async(uid)=>{
     const userData = await useUserinfo(uid)
     console.log(userData) 
  }
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          saveToken({
            uid: user.uid,
            token: user.accessToken,
          })
        ); 
        getUserData(user.uid)
      }
    });
  }, [auth, dispatch]);

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
        element: <EditProfile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
