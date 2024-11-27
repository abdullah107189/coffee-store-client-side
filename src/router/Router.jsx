import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProducts from "../pages/AddProducts/AddProducts";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path:'/addProducts',
                element:<AddProducts></AddProducts>
            }
        ]
    },

]);

export default Router;