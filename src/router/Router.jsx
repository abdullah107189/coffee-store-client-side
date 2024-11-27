import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProducts from "../pages/AddProducts/AddProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

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
                path: '/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    },

]);

export default Router;