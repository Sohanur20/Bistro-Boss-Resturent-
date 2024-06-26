
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const NavBer = () => {
const {user , logOut} = useContext(AuthContext)
const [cart] = useCart()
const handleLogOut = () =>{
    logOut()
    .then()
    .catch()
}

  const navitems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/menu'>Our Menu</NavLink></li>
    <li><NavLink to='/order/category'>Order Food</NavLink></li>
    <li><NavLink to='/secret'>secret</NavLink></li>
    <li><NavLink to='/dashboard/cart'><FaCartShopping className="text-2xl" />
    <div className="badge badge-secondary">
     + {cart.length}
    </div>
    </NavLink></li>

  

    </>


  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">

                {navitems}

            </ul>

        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

            {navitems}
        </ul>
    </div>
    <div className="navbar-end flex gap-6">
    {
    user ? <>
    <span>{user?.displayName}</span>
    <button className="btn btn-outline btn-success" onClick={handleLogOut}>LogOut</button></> :  <li><NavLink to='/login'>Login</NavLink></li>
  }
    </div>
</div>
  );
};

export default NavBer;
