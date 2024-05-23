import { IoLogoGoogle } from "react-icons/io5";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();
  const axiosPublic = useAxiosPublic();
const navigate = useNavigate()


  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate('/')
      });
    });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn">
        <IoLogoGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
