import { BiMenu } from "react-icons/bi";
import { FaCalendarAlt, FaHome } from "react-icons/fa";

import { GrContact } from "react-icons/gr";
import { IoCartSharp, IoWallet } from "react-icons/io5";
import { MdReceiptLong } from "react-icons/md";
import { RiFeedbackFill, RiShoppingBagFill } from "react-icons/ri";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu gap-4 ">
        <li>
            
            <NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/reservation"><FaCalendarAlt />reservation</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/payment history"><IoWallet />payment history</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/cart"><IoCartSharp />My Cart<span>{cart.length}</span></NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/addreview"><RiFeedbackFill />add review</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/mybooking"><MdReceiptLong />my booking</NavLink>
          </li>

          <div className="divider">OR</div>
          <li>
            
            <NavLink to="/"><FaHome></FaHome> Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/order/salad"><BiMenu /> Menu</NavLink>
          </li>
          <li>
            
            <NavLink to="/order/salad"><RiShoppingBagFill />Shop</NavLink>
          </li>
          <li>
            
            <NavLink to="/order/salad"><GrContact />Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
