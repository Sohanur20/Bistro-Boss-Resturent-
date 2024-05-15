import { Helmet } from "react-helmet-async";
import NavBer from "../Shared/NavBer/NavBer";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Recommends from "./CHEF RECOMMENDS/Recommends";
import Featured from "./Featured/Featured";
import Order from "./ORDERONLINE/Order";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testrimonial from "./Testrimonial/Testrimonial";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Home</title>
      </Helmet>
      <NavBer></NavBer>
      <Banner></Banner>
      <Order></Order>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testrimonial></Testrimonial>
    </div>
  );
};

export default Home;
