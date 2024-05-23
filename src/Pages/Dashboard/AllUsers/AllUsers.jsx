/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "../../../Hooks/useAxiosHook";

const AllUsers = () => {

    const axiosSecure = useAxiosHook()
    const {data : users = []} = useQuery({
        queryKey : ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data

        }
    })
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl ">Total Users  <span className="text-green-600">{users.length}</span></h2>
      </div>

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
  {
    users.map((user,index) => <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)
  }
     
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AllUsers;
