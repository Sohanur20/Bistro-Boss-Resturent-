import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";


// todo : add publishebale key 
const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading='Please pay to Eat'></SectionTitle>

            <div>
             <Elements stripe={stripePromise}>

                
             </Elements>
            </div>
        </div>
    );
};

export default Payment;