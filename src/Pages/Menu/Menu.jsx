
import NavBer from "../../Components/Shared/NavBer/NavBer";
import menuImg from '../../assets/menu/banner3.jpg'

import PopularMenu from "../../Components/Home/PopularMenu/PopularMenu";

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
     <PopularMenu></PopularMenu>
     <Cover  img={menuImg} title={"our menu"}></Cover>
     <PopularMenu></PopularMenu>
     <Cover  img={menuImg} title={"our menu"}></Cover>
     <PopularMenu></PopularMenu>





      </div>
     
    </div>
  );
};

export default Menu;
