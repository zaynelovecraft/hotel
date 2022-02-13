import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase-client";
import { useUser } from "../utils/useUser";

function Admin() {
  const [resopen, setResopen] = useState(false);
  const [useropen, setUseropen] = useState(false);
  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [pendingg, setPendingg] = useState()
  console.log(pendingg)

  let today = new Date();
  let time = today.toDateString();

  const getpending = async() => {
    const { data, error } = await supabase
  .from('pending_reservations')
  .select()
  setPendingg(data)
  }

  useEffect(async()=>{
    getpending()
  },[])
  

  const closeall = (x) => {
    if (x === "res") {
      setUseropen(false);
      setPending(false);
      setApproved(false);
      setDeclined(false);
    }
    if (x === "user") {
      setResopen(false);
      setPending(false);
      setApproved(false);
      setDeclined(false);
    }

    if (x === "app") {
      setPending(false);
      setDeclined(false);
    }
    if (x === "pen") {
      setApproved(false);
      setDeclined(false);
    }
    if (x === "dec") {
      setApproved(false);
      setPending(false);
    }
  };
  return (
    <div className="min-h-screen">
      <section className="py-2 mt-5 mb-5">
        <h1 className="text-center text-gray-500">Admin Dashboard</h1>
        <h1 className="text-center text-[12px] text-gray-400">{time}</h1>
      </section>
      <section>
        <div className=" pb-3 border-b">
          <div className="flex justify-center">
            <h1
              onClick={() => {
                setResopen(!resopen), closeall("res");
              }}
              className={`mr-4 relative  text-gray-700  cursor-pointer ${
                resopen === true && "text-cyan-500"
              } hover:text-cyan-500 text-sm`}
            >
              Reservations{" "}
              {resopen === false && (
                <span className="absolute text-red-500 text-[10px] animate-pulse font-bold -top-1 -right-2 ">
                  {pendingg?.length}
                </span>
              )}{" "}
            </h1>
            <h1
              onClick={() => {
                setUseropen(!useropen), closeall("user");
              }}
              className={`mr-4 cursor-pointer ${
                useropen === true && "text-cyan-500"
              }  text-gray-700  hover:text-cyan-500 text-sm`}
            >
              Users
            </h1>
            <h1 className="text-sm relative cursor-pointer text-gray-700 hover:text-cyan-500">
              Messages{" "}
              <span className="absolute text-red-500 text-[10px] -right-6 animate-pulse font-bold -top-1 ">
                99+
              </span>
            </h1>
          </div>
        </div>
      </section>

      {useropen === true && (
        <div className="mt-2">
          <h1 className="text-gray-500 text-center">All Authenticated Users</h1>
        </div>
      )}
      {resopen === true && (
        <section>
          <div className="border flex-row  bg-gray-200">
            <div className="flex mt-2 mb-2 justify-center">
              <div>
                <h1
                  onClick={() => {
                    setPending(!pending), closeall("pen");
                  }}
                  className={`mr-4 cursor-pointer ${
                    pending === true && "text-cyan-500"
                  }  relative hover:text-cyan-500 text-[12px]`}
                >
                  Pending{" "}
                  <span className="absolute text-red-500 -right-2 text-[10px] animate-pulse font-bold -top-1 ">
                    {pendingg?.length}
                  </span>{" "}
                </h1>
              </div>
              <div>
                <h1
                  onClick={() => {
                    setApproved(!approved), closeall("app");
                  }}
                  className={`mr-4  cursor-pointer hover:text-cyan-500 text-[12px] ${
                    approved === true && "text-cyan-500"
                  }`}
                >
                  Approved
                </h1>
              </div>
              <div>
                <h1
                  onClick={() => {
                    setDeclined(!declined), closeall("dec");
                  }}
                  className={` text-[12px] cursor-pointer ${
                    declined === true && "text-cyan-500"
                  }  hover:text-cyan-500`}
                >
                  Declined
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}
      {approved === true && (
        <div className="mt-4">
          <h1 className="text-center text-sm  text-gray-600">
            Approved Reservations
          </h1>
        </div>
      )}
      {pending === true && (
        <div className="mt-4">
          <h1 className="text-center text-sm  text-gray-600">
            Pending Reservations
          </h1>
          {pendingg.map((post) => (
              <div key={post.user_id}>
                  <div className="flex text-xs my-2 py-2 border-2 border-gray-700 w-full flex-col">
                      <h1 className="text-center text-sm mb-2 underline">User Details</h1>
                      <h1>Name: {post.name}</h1>
                      <h1>Phone: {post.phone_number}</h1>
                      <h1>Email: {post.email}</h1>
                      <h1>User Email: {post.user_email}</h1>
                      <h1>USID: {post.user_id}</h1>
                      <h1 className="text-center text-sm  mb-2 underline">Booking Details</h1>
                      <h1>Hotel: {post.hotel_name}</h1>
                      <h1>Created at: {post.created_at}</h1>
                      <h1>Check In: {post.start_date}</h1>
                      <h1>Check Out: {post.end_date}</h1>
                      <h1>Total Nights: {post.nights}</h1>
                      <h1>Weekdays: {post.weekdays}</h1>
                      <h1>Weekend days: {post.weekend_days}</h1>
                      <h1>Guest amount: {post.guest}</h1>
                      <h1>Extra guest: {post.extra_guest}</h1>
                      <h1>Pets: {post.pets}</h1>
                      <h1 className="text-center text-sm mb-2 underline">Payment Details</h1>
                    <h1>Weekday price: ${post.weekday_price}</h1>
                    <h1>Weekend price: ${post.weekend_price}</h1>
                    <h1>Total:${post.price}</h1>
                    <h1>Extra guest fee: ${post.extra_guest_fee}</h1>
                    <h1>Guest fee total: ${post.guest_fee_total}</h1>
                    <h1>Pet fee: ${post.pet_fee}</h1>
                    <h1>Weekly discount: ${post.weekly_discount}</h1>
                    <h1>Monthly discount: ${post.monthly_discount}</h1>
                    <h1>Cleaning fee: $65</h1>
                    <h1>Security deposit: $200</h1>
                    <h1>Total: ${post.total}</h1>


                  </div>
                 
              </div>
            ))}
        </div>
      )}
      {declined === true && (
        <div className="mt-4">
          <h1 className="text-center text-sm  text-gray-600">
            Declined Reservations
          </h1>
        </div>
      )}
    </div>
  );
}

export default Admin;
