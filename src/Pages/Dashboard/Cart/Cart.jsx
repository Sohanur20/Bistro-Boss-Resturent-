
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosHook from "../../../Hooks/useAxiosHook";

const Cart = () => {
  const [cart , refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
const axiosSecure = useAxiosHook()

const handleDelete = (id) =>{
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
   
    axiosSecure.delete(`/carts/${id}`)
    .then( res =>{
     if (res.data.deletedCount > 0) {
        refetch()
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
     }
    })
    }
  });
}


  return (
    <div>
      <div className="flex justify-evenly gap5">
        <h2 className="text-xl">Items : {cart.length}</h2>
        <h2 className="text-xl">Total Price : {totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
            <th className="uppercase">List</th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

{
    cart.map((item, index) => <tr key={item._id}>
        <th>
            {index + 1}
        </th>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            
          </div>
        </td>
        <div>
              <div className="font-bold">{item.name}</div>
             
            </div>
        <td>$ {item.price}</td>
        <th>
          <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-4xl"><MdDelete /></button>
        </th>
      </tr>)
}


           
         
          </tbody>
        
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
