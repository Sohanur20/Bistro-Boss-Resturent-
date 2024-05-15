import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Recommends = () => {
  return (
    <div className="my-32">
      <SectionTitle
        heading={"---Should Try---"}
        subHeading={"CHEF RECOMMENDS"}
      ></SectionTitle>

<div className="grid lg:grid-cols-3 grid-cols-1 mt-20">


<div className="card w-96 bg-gray-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFnmN6Erd4Vw0RC37qpi5uOgPwOdAvAn2-yAWRcbcog&s" alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary uppercase">add to cart</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-gray-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFnmN6Erd4Vw0RC37qpi5uOgPwOdAvAn2-yAWRcbcog&s" alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary uppercase">add to cart</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-gray-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFnmN6Erd4Vw0RC37qpi5uOgPwOdAvAn2-yAWRcbcog&s" alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary uppercase">add to cart</button>
    </div>
  </div>
</div>


</div>



    </div>
  );
};

export default Recommends;
