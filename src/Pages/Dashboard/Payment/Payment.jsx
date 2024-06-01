import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";

// todo : add publishebale key
const stripePromise = loadStripe('pk_test_51PMZK1LoNc3DJxn1zCGqIu7KVIQJhKDyh43iX2c4MrsG5Sr1w6FpJDsZyBwHNzJixIA41UBrhLYWBFVS7gB5O3uq00ERlocyo5');
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to Eat"
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
