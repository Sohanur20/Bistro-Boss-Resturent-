import { Outlet } from "react-router-dom";
import NavBer from "../NavBer/NavBer";
import Footer from "../Footer/Footer";


const MainOutlet = () => {


    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainOutlet;