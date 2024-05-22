import { Link, useNavigate } from "react-router-dom";


import loginImg from "../../assets/others/authentication.png";
import loginImg1 from "../../assets/others/authentication2.png";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
const {createUser , updateUserProfile} = useContext(AuthContext)
const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit, formState: { errors },reset
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user ;
      console.log(loggedUser);
      updateUserProfile(data.name , data.photoURL)
      .then(() => {
        // console.log('user profile info updated')

const userInfo = {
  name : data.name ,
  email : data.email
}

        axiosPublic.post('/users' , userInfo)
        .then(res =>{
          if (res.data.insertedId) {
            console.log('user added to the data base');
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
          }
        })
     
    })
    .catch(error => console.log(error))
    })

  };



  return (
    <div>
    <Helmet>
      <title>bistro boss signUp</title>
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
            <h1 className="text-5xl font-bold text-center mt-4">
              Sign up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input className="input input-bordered" defaultValue="" placeholder="Name" {...register("name" ,{required : true})} />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input className="input input-bordered" placeholder="email" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input className="input input-bordered" type="password" placeholder="password" {...register("password", { required: true , minLength : 6 , maxLength : 20 ,  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} />
                {/* errors will return when field validation fails  */}
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
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
             <SocialLogin></SocialLogin>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
