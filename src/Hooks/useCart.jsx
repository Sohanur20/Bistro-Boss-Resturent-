import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";
import UseAuth from "./UseAuth/UseAuth";

const useCart = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosHook();
  const { data: cart = [] , refetch} = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
