import { useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication.png";
import loginImg1 from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,

  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {

const chaptchaRef = useRef(null)
const [disabled , setDisabled] = useState(true) ;
 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

const handleValidateChaptcha = () =>{

const user_captcha_value = chaptchaRef.current.value ;
if (validateCaptcha(user_captcha_value)==true) {
 setDisabled(false)
}

}


  return (
    <div>
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
                <input
                  type="text"
                  name="chaptcha"
                 
                  ref={chaptchaRef}
                  placeholder="type the chaptcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateChaptcha}
                  className="btn btn-outline btn-xs"
                 
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
               <input type="submit" disabled={disabled} value='Login' className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
