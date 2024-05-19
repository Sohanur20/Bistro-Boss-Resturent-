/* eslint-disable react/prop-types */
import FooCard from "../../../Components/Shared/FooCard/FooCard";


const OrderTab = ({items}) => {
    return (
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mt-20 gap-10">
              {items.map((item) => (
                <FooCard key={item._id} item={item}></FooCard>
              ))}
            </div>
        </div>
    );
};

export default OrderTab;