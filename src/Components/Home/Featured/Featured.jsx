import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div>
             <div className="p-6 bg-fixed"  style={{backgroundImage: 'url(https://i.ibb.co/dBdMns0/featured.jpg)'}}>
            <SectionTitle subHeading='---Check it out---'

                heading='FROM OUR MENU'
            ></SectionTitle>

            <div className="md:flex justify-center items-center p-14 gap-10 bg-stone-500 bg-opacity-40 mt-10">
                <div>
                    <img src={featured} alt="" />

                </div>
                <div className="md:ml-10 text-white">
                    <p className="font-extrabold text-2xl">March 20, 2023</p>
                    <p> 
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline mt-4 btn-accent">Read More</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Featured;