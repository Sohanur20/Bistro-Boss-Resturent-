/* eslint-disable react/prop-types */
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
      </div>
    </div>
  );
};

export default Menucategory;
