

import menuImg from '../../assets/menu/banner3.jpg'
import Cover from "../../Components/Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import Menucategory from "./Menucategory/Menucategory";
import dessrtsImg from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import Soup from '../../assets/menu/soup-bg.jpg'
import Salad from '../../assets/menu/salad-bg.jpg'

const Menu = () => {

const [menu] = useMenu()
const dessert = menu.filter(item =>item.category === 'dessert')
const soup = menu.filter(item =>item.category === 'soup')
const salad = menu.filter(item =>item.category === 'salad')
const offered = menu.filter(item =>item.category === 'offered')
const Pizza = menu.filter(item =>item.category === 'pizza')



  return (
    <div>
      <Helmet>
        <title>Bistro Boss Menu</title> 
      </Helmet>
      <div>
   
 
     <Cover  img={menuImg} title={"our menu"}></Cover>
     <SectionTitle subHeading={"DoNT MISS"} heading={"Todays Offers"}>

     </SectionTitle>
     {/*  */}
     <Menucategory items={offered}></Menucategory>
     <Menucategory items={dessert} title={"Dessert"} img={dessrtsImg}></Menucategory>
     {/*  */}
     <Menucategory items={Pizza} title={"Pizza"} img={pizza}></Menucategory>
     <Menucategory items={Pizza}></Menucategory>
     {/*  */}
     <Menucategory items={soup} title={"soup"} img={Soup}></Menucategory>
     <Menucategory items={soup}></Menucategory>
     {/*  */}
     <Menucategory items={salad} title={"salad"} img={Salad}></Menucategory>
     <Menucategory items={salad}></Menucategory>





      </div>
     
    </div>
  );
};

export default Menu;
