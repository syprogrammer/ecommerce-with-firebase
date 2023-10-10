import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import '../index.css'
import { Suspense, lazy } from "react";
import RestaurantMenu from "./pages/RestaurantMenu";
import Error from "./components/Error";
const About = lazy(() => import("./pages/About"))

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/about',
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                )
            }, {
                path: "/",
                element: <Home />
            }
        ]
    }, {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />
    }
])

export default function App() {
    return <RouterProvider router={appRouter} />
}