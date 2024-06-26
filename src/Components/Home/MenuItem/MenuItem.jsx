/* eslint-disable react/prop-types */


const MenuItem = ({item}) => {

    const {name,image , price , recipe } = item;
    return (
        <div className="flex space-x-4 items-center flex-col lg:flex-row p-10">
        <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
        <div>
            <h3 className="uppercase">{name}----------</h3>
            <p>{recipe}</p>
            
        </div>
        <p className="text-orange-500 font-bold text-2xl">${price}</p>
    </div>
    );
};

export default MenuItem;