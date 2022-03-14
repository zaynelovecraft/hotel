// import axios from "axios";

// const push = async () => {
//   await axios.post("/api/add-google-date")
// };
import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark";
import { supabase } from "../utils/supabase-client";
import { useUser } from '../utils/useUser';
import { useState, useEffect } from "react";

const success = () => {
  const { signUp, user, signIn } = useUser();
  const [successdata, setSuccessdata] = useState()

  

 console.log(successdata)
  
  

  const getpaymentdetails = async () => {
 
if(user) {

  const { data, error } = await supabase
    .from('pending_reservations')
    .select('*')
    .match({user_id: user.id, status: 'Payedd'})
    setSuccessdata(data)
}
 
  }


  useEffect(async () => {
    getpaymentdetails()
  }, []);
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center -mt-[50px] justify-center text-center">
      <div className="rounded-lg flex flex-col text-center items-center shadow-lg bg-white  w-[250px]">
      <div className="" >
      < FcCheckmark className="h-10 w-10 text-green-700" />
      </div>
<div>
  <h1 className="text-xl font-medium text-green-700">Payment Confirmed</h1>
</div>
<div className="m-2">
  <h1>Thank you!</h1>
</div>
<div className="text-sm mx-2">
  Your Reservation has been made and accommodations are being arranged. Please dont hesitate to contact us if you have any questions.
</div>

      </div>
    </div>
  );
};

export default success;
