import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet/MainOutlet";
import Home from "../Home/Home";
import Menu from "../../Pages/Menu/Menu";
import OrderFood from "../../Pages/OrderFood/OrderFood";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainOutlet></MainOutlet>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path: '/menu',
          element : <Menu></Menu>
        },
        {
          path : '/order/:category',
          element : <OrderFood></OrderFood>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);
  

export default Router;