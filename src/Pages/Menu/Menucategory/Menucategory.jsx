/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../../Components/Home/MenuItem/MenuItem";
import Cover from "../../../Components/Shared/Cover/Cover";

const Menucategory = ({ items ,title , img}) => {
  return (
    <div>
        {title &&  <Cover  img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10  my-32">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
        <div className=" flex justify-center">
          <Link to={`/order/${title}`}>
          <button className="btn btn-outline btn-success btn-block">Order Now</button>
          </Link>
      
        </div>
              
      </div>

    </div>
  );
};

export default Menucategory;
