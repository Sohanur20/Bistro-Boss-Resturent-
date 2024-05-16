/* eslint-disable react/prop-types */



const FooCard = ({item}) => {
const {name , image , price , recipe} = item

    return (
        <div>
            



<div className="card w-96 bg-gray-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl w-full " />
    <p className="absolute right-10 top-20 bg-black text-white p-5">${price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
 
    <div className="card-actions">
      <button className="btn btn-primary uppercase">add to cart</button>
    </div>
  </div>
</div>
</div>
      
    );
};

export default FooCard;