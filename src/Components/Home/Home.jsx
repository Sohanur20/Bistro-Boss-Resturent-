import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Order from "./ORDERONLINE/Order";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
       
         <Order></Order>
       <BistroBoss></BistroBoss>
        
        </div>
    );
};

export default Home;