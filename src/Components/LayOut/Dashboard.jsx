/* eslint-disable no-unused-vars */
import { BiMenu } from "react-icons/bi";
import { FaAd, FaCalendarAlt, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";

import { GrContact } from "react-icons/gr";
import { IoCartSharp, IoWallet } from "react-icons/io5";
import { MdReceiptLong } from "react-icons/md";
import { RiFeedbackFill, RiShoppingBagFill } from "react-icons/ri";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()

    const [isAdmin] = useAdmin() ;
    return (
      <div className="flex">
          {/* dashboard side bar */}
          <div className="w-64 min-h-screen bg-orange-400">
              <ul className="menu p-4">
                  {
                      isAdmin ? <>
                          <li>
                              <NavLink to="/dashboard/adminHome">
                                  <FaHome></FaHome>
                                  Admin Home</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/addItems">
                                  <FaUtensils></FaUtensils>
                                  Add Items</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/manageItems">
                                  <FaList></FaList>
                                  Manage Items</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/bookings">
                                  <FaBook></FaBook>
                                  Manage Bookings</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/users">
                                  <FaUsers></FaUsers>
                                  All Users</NavLink>
                          </li>
                      </>
                          :
                          <>
                              <li>
                                  <NavLink to="/dashboard/userHome">
                                      <FaHome></FaHome>
                                      User Home</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/dashboard/reservation">
                                      <FaCalendar></FaCalendar>
                                      Reservation</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/dashboard/cart">
                                      <FaShoppingCart></FaShoppingCart>
                                      My Cart ({cart.length})</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/dashboard/review">
                                      <FaAd></FaAd>
                                      Add a Review</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/dashboard/bookings">
                                      <FaList></FaList>
                                      My Bookings</NavLink>
                              </li>
                          </>
                  }
                  {/* shared nav links */}
                  <div className="divider"></div>
                  <li>
                      <NavLink to="/">
                          <FaHome></FaHome>
                          Home</NavLink>
                  </li>
                  <li>
                      <NavLink to="/order/salad">
                          <FaSearch></FaSearch>
                          Menu</NavLink>
                  </li>
                  <li>
                      <NavLink to="/order/contact">
                          <FaEnvelope></FaEnvelope>
                          Contact</NavLink>
                  </li>
              </ul>
          </div>
          {/* dashboard content */}
          <div className="flex-1 p-8">
              <Outlet></Outlet>
          </div>
      </div>
  );


    
    //   return (
//     <div className="flex">
//       <div className="w-64 min-h-full bg-orange-400">
//         <ul className="menu gap-4 ">

//         {
//                         isAdmin ? <>
//                             <li>
//                                 <NavLink to="/dashboard/adminHome">
//                                     <FaHome></FaHome>
//                                     Admin Home</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/addItems">
//                                     <FaUtensils></FaUtensils>
//                                     Add Items</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/manageItems">
//                                     <FaList></FaList>
//                                     Manage Items</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/bookings">
//                                     <FaBook></FaBook>
//                                     Manage Bookings</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/dashboard/users">
//                                     <FaUsers></FaUsers>
//                                     All Users</NavLink>
//                             </li>
//                         </>
//                             :
//                             <>
//                                 <li>
//                                     <NavLink to="/dashboard/userHome">
//                                         <FaHome></FaHome>
//                                         User Home</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/reservation">
//                                         <FaCalendar></FaCalendar>
//                                         Reservation</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/cart">
//                                         <FaShoppingCart></FaShoppingCart>
//                                         My Cart ({cart.length})</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/review">
//                                         <FaAd></FaAd>
//                                         Add a Review</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/bookings">
//                                         <FaList></FaList>
//                                         My Bookings</NavLink>
//                                 </li>
//                             </>
//                     }
// {/*  */}
//           <div className="divider">OR</div>
//           <li>
            
//             <NavLink to="/"><FaHome></FaHome> Home</NavLink>
//           </li>
//           <li>
            
//             <NavLink to="/order/salad"><BiMenu /> Menu</NavLink>
//           </li>
//           <li>
            
//             <NavLink to="/order/salad"><RiShoppingBagFill />Shop</NavLink>
//           </li>
//           <li>
            
//             <NavLink to="/order/contact"><GrContact />Contact</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-1 p-8">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
};

export default Dashboard;
