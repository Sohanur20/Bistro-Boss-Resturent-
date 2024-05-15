import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet/MainOutlet";
import Home from "../Home/Home";
import Menu from "../../Pages/Menu/Menu";


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
        }
      ]
    },
  ]);
  

export default Router;