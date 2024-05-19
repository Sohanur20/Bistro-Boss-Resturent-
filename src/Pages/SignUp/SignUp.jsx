import { Link } from "react-router-dom";


import loginImg from "../../assets/others/authentication.png";
import loginImg1 from "../../assets/others/authentication2.png";

import { useForm } from "react-hook-form";

const SignUp = () => {


  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };



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
            <h1 className="text-5xl font-bold text-center mt-4">
              Sign up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input className="input input-bordered" defaultValue="" placeholder="Name" {...register("name" ,{required : true})} />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input className="input input-bordered" placeholder="email" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input className="input input-bordered" placeholder="password" {...register("password", { required: true , minLength : 6 , maxLength : 8})} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-primary"
                />
              </div>
            </form>

            <p className="text-center">
              You have allready account{" "}
              <Link className="text-blue-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
