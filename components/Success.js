import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark";
import { supabase } from "../utils/supabase-client";
import { useState, useEffect } from "react";
import { useUser } from "../utils/useUser";

export default function success() {
  const { user } = useUser();
  const [successdata, setSuccessdata] = useState();
  const [show, setShow] = useState(false);
  console.log(successdata)
  const updatestatus = async() => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .update({ status: "payed" })
      .match({ user_id: user?.id, status: "Payedd" });
  }

  const getpaymentdetails = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user?.id, status: "Payedd" });

      console.log(data)

      if(data[0]?.status === "Payedd") {
        setShow(true)
      }

      setSuccessdata(data)

      updatestatus()
  };

  useEffect(() => {
    getpaymentdetails();
  }, []);
  
 

  return (
    <div>
      {show == true ? (
        <div className="h-screen bg-gray-100 flex flex-col items-center -mt-[50px] justify-center text-center">
          <div className="rounded-lg flex flex-col text-center justify-center items-center shadow-lg bg-white  w-[250px] sm:w-[500px] sm:h-[350px]">
            <div className="">
              <FcCheckmark className="h-10 w-10 text-green-700" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-green-700">
                Payment Confirmed
              </h1>
            </div>
            <div className="m-2">
              <h1>Thank you!</h1>
            </div>
            <div className="text-sm mx-2">
              Your Reservation has been booked and accommodations are being
              arranged. Please dont hesitate to contact us if you have any
              questions.
            </div>
            <div className="mt-3 mb-2 text-gray-700 text-sm underline">
              <h1>Accommodation Details</h1>
            </div>
            <div>
              {successdata?.map((post) => (
                <div key={post.id}>
                  <div className="mb-2 text-sm">
                  {post.hotel_name}
                  </div>
                  <div><h1 className="text-sm mb-2">Check-In: 3pm {post.start_date}</h1></div>
                  <div><h1 className="text-sm mb-3">Check-Out: 11am {post.end_date}</h1></div>
                  <div></div>
                  <div></div>
                  <div></div>

                  
                  </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
