import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Recommends from "./CHEF RECOMMENDS/Recommends";
import Featured from "./Featured/Featured";
import Order from "./ORDERONLINE/Order";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Order></Order>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Recommends></Recommends>
      <Featured></Featured>
    </div>
  );
};

export default Home;
