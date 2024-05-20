/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FooCard = ({ item }) => {
  const { name, image, price, recipe , _id} = item;
  const {user} = UseAuth()
const navigate  = useNavigate()  
const location = useLocation()

const handleAddCart = food => {
  console.log("Add to cart clicked");
  console.log("User:", user);

  if (user && user.email) {
    // Todo: send cart item to the database
    console.log("User is logged in. Adding to cart...");
const cartItem = {
  menuId : _id,
  email : user.email,
  name ,
  image ,
  price
}
axios.post('http://localhost:5000/carts' , cartItem)
.then(res => {
  console.log(res.data);
  if (res.data.insertedId) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added `,
      showConfirmButton: false,
      timer: 1500
    });
  }
})


  } else {
    console.log("User is not logged in. Showing SweetAlert...");
    Swal.fire({
      title: "You are not Logged in",
      text: "please login and add the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, want  it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User confirmed. Redirecting to login...");
        navigate('/login' , {state : {from : location}} );
      }
    });
  }
}

  return (
    <div>
      <div className="card w-96 bg-gray-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-full " />
          <p className="absolute right-10 top-20 bg-black text-white p-5">
            ${price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions">
            <button
              onClick={() => handleAddCart(item)}
              className="btn btn-primary uppercase"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooCard;
