/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication.png";
import loginImg1 from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate(from, { replace: true });
    });
  };

  const handleValidateChaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true)
  }
  };

  return (
    <div>
      <Helmet>
        <title>bistro boss Login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row gap-20 rounded-xl shadow-2xl shadow-slate-800">
          <div className="text-center lg:text-left">
            <img src={loginImg1} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm  ">
            <h1 className="text-5xl font-bold text-center mt-4">Login now!</h1>
            <form onSubmit={handleSubmitLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateChaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input 
                                 disabled={false} 
                                 
                                 className="btn btn-primary" type="submit" value="Login" />
                            </div>
            </form>

            <p className="text-center">
              You dont have an account{" "}
              <Link className="text-blue-600 font-bold" to="/signup">
                SignUp
              </Link>
              <SocialLogin></SocialLogin>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
