/* eslint-disable no-unused-vars */
import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosHook from "../../../Hooks/useAxiosHook";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu ,loading, refetch] = useMenu();
  const axiosSecure = useAxiosHook();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`);
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
                // refetch to update the ui
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }


        }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-yellow-500">
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-start">$ {item.price}</td>
                  <th>

<Link to={`/dashboard/updateItem/${item._id}`}>
<button className="btn btn-ghost text-2xl bg-red-400">
                      <FaEdit></FaEdit>
                    </button>

</Link>

                
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost text-2xl bg-red-400"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
