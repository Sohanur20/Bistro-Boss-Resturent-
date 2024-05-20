import axios from "axios";


export const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000/'
})

const useAxiosHook = () => {
    return  axiosSecure
};

export default useAxiosHook;