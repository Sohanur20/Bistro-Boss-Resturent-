/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosHook from "../../../Hooks/useAxiosHook";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {

    const { register, handleSubmit ,reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosHook()
    const item = useLoaderData()

    // console.log(item);
const {name ,category,image,price,recipe , _id} = item


    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
    
    
        if (res.data.success) {
            // send the menu items server
            const menuItem = {
                name : data.name,
                category : data.category,
                price : parseFloat(data.price),
                recipe : data.recipe ,
                image : res.data.data.display_url
    
            }
            const menuResponse = await axiosSecure.patch(`/menu/${_id}` , menuItem);
            console.log(menuResponse);
            if (menuResponse.data.modifiedCount > 0) {
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is the updated  on menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with img url',res.data);
      };



    return (
        <div>
          <SectionTitle heading='Update an Item' subHeading='Refresh info'></SectionTitle>

          <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              defaultValue={name}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="category"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Update MenuItem <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
          </div>
        </div>
    );
};

export default UpdateItem;