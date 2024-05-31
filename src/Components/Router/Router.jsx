import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet/MainOutlet";
import Home from "../Home/Home";
import Menu from "../../Pages/Menu/Menu";
import OrderFood from "../../Pages/OrderFood/OrderFood";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../../Pages/Dashboard/Cart/Cart";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import ManageItems from "../../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../../Pages/Dashboard/Payment/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  // admin routes
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes> ,
    children: [
      // normal users routes
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path : '/dashboard/payment',
        element : <Payment></Payment>
      },

      // admin only routes
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem></UpdateItem>
          </AdminRoutes>

        ),
        loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },

      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            {" "}
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default Router;
