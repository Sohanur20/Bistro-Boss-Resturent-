/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mt-16 text-center mx-auto">
            <p className="text-yellow-600 text-3xl
            ">{subHeading}</p>
            <h3 className="text-4xl uppercase font-bold border-y-4 py-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;