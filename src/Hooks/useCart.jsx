import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";


const useCart = () => {
    const axiosSecure = useAxiosHook()
const {data : cart=[]} = useQuery({
    queryKey: ['cart'],
    queryFn : async() =>{
        const res = await axiosSecure.get('/carts')
        return res.data
    }
})
 return [cart]
};

export default useCart;
