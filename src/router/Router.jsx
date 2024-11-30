import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProducts from "../pages/AddProducts/AddProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Register from "../pages/Form/Register";
import Login from "../pages/Form/Login";
import AllUsers from "../pages/AllUsers/AllUsers";

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
            },
            {
                path: 'reg',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allUsers',
                element: <AllUsers></AllUsers>,
                loader: () => fetch('http://localhost:5000/users')
            }

        ]
    },

]);

export default Router;