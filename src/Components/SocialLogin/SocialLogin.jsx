
import { IoLogoGoogle } from "react-icons/io5";
import UseAuth from "../../Hooks/UseAuth/UseAuth";


const SocialLogin = () => {
  const { googleSignIn } = UseAuth();

  const handleGoogleLogin = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
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
