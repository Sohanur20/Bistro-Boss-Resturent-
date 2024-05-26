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
    element:<Dashboard></Dashboard>,
    children: [
      // normal users routes
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },

      // admin only routes
      {
        path : '/dashboard/addItems',
        element :<AdminRoutes><AddItems></AddItems></AdminRoutes>
      }
      ,

      {
        path : '/dashboard/users',
        element :<AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
      }
    ],
  },
]);

export default Router;
