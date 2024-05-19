import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Footer/Footer";
import NavBer from "../Shared/NavBer/NavBer";


const MainOutlet = () => {
const location = useLocation()
const isHeaderFooter = location.pathname.includes('login')

    return (
        <div>
        {isHeaderFooter || <NavBer></NavBer>}
            <Outlet></Outlet>
            {isHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainOutlet;