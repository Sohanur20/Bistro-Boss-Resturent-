
import NavBer from "../../Components/Shared/NavBer/NavBer";
import menuImg from '../../assets/menu/banner3.jpg'
import Cover from "../../Components/Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Menu</title>
      </Helmet>
      <div>
      <NavBer></NavBer>
 
     <Cover  img={menuImg} title={"our menu"}></Cover>
    





      </div>
     
    </div>
  );
};

export default Menu;
