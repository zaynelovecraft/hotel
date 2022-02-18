
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase-client";
import { useUser } from "../utils/useUser";

function Admin() {
  const [resopen, setResopen] = useState(false);
  const [useropen, setUseropen] = useState(false);
  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [pendingg, setPendingg] = useState();
  const [rerender, setRerender] = useState(false);
  const [users, setUsers] = useState();
  const [declinedd, setDeclinedd] = useState();
  const [approvedd, setApprovedd] = useState();
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [del,setDel] = useState()
  const [apr, setApr] = useState()
  const [declinee, setDeclinee] = useState()

  // useEffect(() => {
  //   setRerender(!rerender);
  // }, []);


  
  let today = new Date();
  let time = today.toDateString();

  const decline = async () => {
    // const {x,y} = await supabase
    // .from('declined_post')
    // .insert(pendingg.id.post)
    const { data, error } = await supabase
      .from("pending_reservations")
      .update({ status: "declined" })
      .match({ id: declinee});
      setModal2(false)
    getapproved()
    getpending()
    getdeclined()
    
   
  };
  const confirmdel = (id) => {
    setDel(id)
    setModal(!modal)

  };
  const confirmaprov = (id) => {
    
    setApr(id)
    setModal1(!modal1)

  };
  const confirmdecline = (id) => {
    setDeclinee(id)

    setModal2(!modal1)
   

  };
  const dell = async() => {
    const {data, error} = await supabase
    .from('pending_reservations')
    .delete()
    .match({id: del})
    setModal(false)
    getdeclined()
  }

  const approve = async () => {
   
    const { data, error } = await supabase
      .from("pending_reservations")
      .update({ status: "approved" })
      .match({ id: apr });

  
    
    setModal1(false)
    getpending()
    getapproved()
  
    
 
  };

  useEffect(() => {
    getallusers();
  }, []);

  const getallusers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    setUsers(data);
  };

  const getdeclined = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")   
      .match({ status: "declined" });
    setDeclinedd(data);
  };
  const getapproved = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ status: "approved" });
    setApprovedd(data);
    // console.log(approvedd)
  };

  const getpending = async () => {
    //   const { data, error } = await supabase
    // .from('pending_reservations')
    // .select()

    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ status: "pending" });
    // console.log(data)
    setPendingg(data);
  };

  useEffect(() => {
    getpending();
    getdeclined();
    getapproved();
  }, []);

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

       {/* <div className ={`top-60 ${modal ? 'fixed' : 'hidden'} right-14 right rounded-3xl bg-gray-200 border w-[300px] fixed h-[300px] z-20`}>

<h1 onClick={()=>{setModal(!modal)}} className="absolute bottom-3 px-2 cursor-pointer rounded-3xl hover:bg-gray-300 bg-gray-400 left-6">Cancel</h1>
<h1 onClick={()=>{deletee(post.id)}} className="
bottom-3 right-8 border rounded-3xl cursor-pointer bg-red-400 px-2 hover:bg-red-300 absolute">Delete</h1>

<h1 className="text-center mt-10 text-xl" >Are you sure you want to delete this reservation?</h1>

</div> */}

<div className={`bg-black bg-opacity-50 justify-center items-center ${modal ? 'flex' : 'hidden'}  fixed inset-0 z-20 `}>
<div className="bg-gray-200 max-w-sm py-2 px-3 text-gray-800 rounded shadow-xl" >
  <div className="flex justify-between items-center">
    <h4 className="text-lg font-bold">Confirm Delete? </h4>
    <h4 onClick={()=>{setModal(false)}} className="text-lg cursor-pointer font-bold">X </h4>
  </div>
  <div className="mt-2 text-sm">
    <p>
      This will delete these details forever.
    </p>
  </div>
  <div className="mt-3 flex justify-end space-x-3">
    <button onClick={()=>{setModal(false)}} className="px-3 py-1  rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900">Cancel</button>
    <button onClick={()=>{dell()}} className="px-3 py-1 bg-red-800 hover:bg-red-600 text-gray-200 rounded">Delete</button>
  </div>
</div>
</div>
<div className={`bg-black bg-opacity-50 justify-center items-center ${modal1 ? 'flex' : 'hidden'}  fixed inset-0 z-20 `}>
<div className="bg-gray-200 max-w-sm py-2 px-3 text-gray-800 rounded shadow-xl" >
  <div className="flex justify-between items-center">
    <h4 className="text-lg font-bold">Confirm Approve? </h4>
    <h4 onClick={()=>{setModal1(false)}} className="text-lg cursor-pointer font-bold">X </h4>
  </div>
  <div className="mt-2 text-sm">
    <p>
      This will Approve This Reservation.
    </p>
  </div>
  <div className="mt-3 flex justify-end space-x-3">
    <button onClick={()=>{setModal1(false)}} className="px-3 py-1  rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900">Cancel</button>
    <button onClick={()=>{approve()}} className="px-3 py-1 bg-lime-500 hover:bg-lime-400 text-black rounded">Approve</button>
  </div>
</div>
</div>
<div className={`bg-black bg-opacity-50 justify-center items-center ${modal2 ? 'flex' : 'hidden'}  fixed inset-0 z-20 `}>
<div className="bg-gray-200 max-w-sm py-2 px-3 text-gray-800 rounded shadow-xl" >
  <div className="flex justify-between items-center">
    <h4 className="text-lg font-bold">Confirm Decline? </h4>
    <h4 onClick={()=>{setModal2(false)}} className="text-lg cursor-pointer font-bold">X </h4>
  </div>
  <div className="mt-2 text-sm">
    <p>
      This will Decline This Reservation.
    </p>
  </div>
  <div className="mt-3 flex justify-end space-x-3">
    <button onClick={()=>{setModal2(false)}} className="px-3 py-1  rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900">Cancel</button>
    <button onClick={()=>{decline()}} className="px-3 py-1 bg-red-800 hover:bg-red-600 text-black rounded">Decline</button>
  </div>
</div>
</div>

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
              {pendingg?.length > 0 && (
                <div>
                  {resopen === false && (
                    <span className="absolute text-red-500 text-[10px] animate-pulse font-bold -top-1 -right-2 ">
                      {pendingg?.length}
                    </span>
                  )}{" "}
                </div>
              )}
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
          <h1 className="text-gray-500 text-center">
            All Authenticated Users<span> {users.length}</span>
          </h1>
          <div>
            {users.map((user) => (
              <div key={user.id} className="border mx-auto border-cyan-500  p-2 pl-7 max-w-[600px] text-sm rounded-3xl mt-5">
                <h1 className="mb-2">User Name: {user.full_name}</h1>
                <h1>User Id:{user.id}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {resopen === true && (
        <section>
          <div className="border flex-row  bg-gray-200">
            <div className="flex mt-2 mb-2 justify-center">
              <div className="z-1">
                <h1
                  onClick={() => {
                    setPending(!pending), closeall("pen");
                  }}
                  className={`mr-4 cursor-pointer ${
                    pending === true && "text-cyan-500"
                  }  relative hover:text-cyan-500 text-[12px]`}
                >
                  Pending{" "}
                  {pendingg.length > 0 && (
                    <div>
                      <span className="absolute text-red-500 -right-2 text-[10px] animate-pulse font-bold -top-1 ">
                        {pendingg?.length}
                      </span>{" "}
                    </div>
                  )}
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
          {approvedd.map((post) => (
            <div className="" key={post.id}>
              <div className="flex relative text-xs my-2 py-2 border-2 max-w-xl mx-auto border-gray-700 w-full flex-col">
                <div
                  onClick={() => {
                    confirmdecline(post.id);
                  }}
                  className="absolute bottom-4 border cursor-pointer hover:bg-red-500 border-red-500 rounded-lg px-2 py-1 right-4"
                >
                  <h1 className="font-semibold">Decline</h1>
                </div>
                <div className="ml-5">
                  <h1 className="text-center -ml-5 text-sm mb-2 underline">
                    POST ID {post.id}
                  </h1>
                  <h1 className="text-center -ml-5 text-sm mb-2 underline">
                    User Details
                  </h1>
                  <h1>Name: {post.name}</h1>
                  <h1>Phone: {post.phone_number}</h1>
                  <h1>Email: {post.email}</h1>
                  <h1>User Email: {post.user_email}</h1>
                  <h1>USID: {post.user_id}</h1>
                  <h1 className="text-center -ml-5 text-sm mt-3 mb-2 underline">
                    Booking Details
                  </h1>
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
                  <h1 className="text-center text-sm -ml-5 mb-2 underline">
                    Payment Details
                  </h1>
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
                  <h1 className="text-xl mt-2">Total: ${post.total}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {pending === true && (
        <div className="mt-4">
          <h1 className="text-center text-sm  text-gray-600">
            Pending Reservations
          </h1>
          {pendingg.map((post) => (
            <div className="" key={post.id}>
              <div className="flex relative text-xs my-2 py-2 border-2 max-w-xl mx-auto border-gray-700 w-full flex-col">
                <div
                  onClick={() => {
                    confirmdecline(post.id);
                  }}
                  className="absolute z-10 bottom-4 border cursor-pointer hover:bg-red-500 border-red-500 rounded-lg px-2 py-1 right-2"
                >
                  <h1 className="font-semibold">Decline</h1>
                </div>
                <div
                  onClick={()=>{confirmaprov(post.id)}}
                  className="absolute z-10 bottom-4 border cursor-pointer hover:bg-lime-400 border-lime-500 rounded-lg px-2 py-1 right-20"
                >
                  <h1 className="font-semibold">Approve</h1>
                </div>
                <div className="ml-5">
                  <h1 className="text-center -ml-5 text-sm mb-2 underline">
                    POST ID {post.id}
                  </h1>
                  <h1 className="text-center -ml-5 text-sm mb-2 underline">
                    User Details
                  </h1>
                  <h1>Name: {post.name}</h1>
                  <h1>Phone: {post.phone_number}</h1>
                  <h1>Email: {post.email}</h1>
                  <h1>User Email: {post.user_email}</h1>
                  <h1>USID: {post.user_id}</h1>
                  <h1 className="text-center -ml-5 text-sm mt-3 mb-2 underline">
                    Booking Details
                  </h1>
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
                  <h1 className="text-center text-sm -ml-5 mb-2 underline">
                    Payment Details
                  </h1>
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
                  <h1 className="text-xl mt-2">Total: ${post.total}</h1>
                </div>
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
          {declinedd.map((post) => (
            <div className="" key={post.id}>
              <div className="flex relative text-xs my-2 py-2 border-2 max-w-xl mx-auto border-gray-700 w-full flex-col">
                <button onClick={()=>{confirmdel(post.id)}} className="absolute z-1 bottom-4 border cursor-pointer hover:bg-red-500 border-red-500 rounded-lg px-2 py-1 right-4">
                  <h1 className="font-semibold">Delete</h1>
                </button>

                <div className="ml-5">
                  <h1 className="text-center -ml-5 text-sm mb-2 underline">
POST ID {post.id}
                  </h1>
                  <h1 className="text-center -ml-5 text-sm mb-2 underline">
                    User Details
                  </h1>
                  <h1>Name: {post.name}</h1>
                  <h1>Phone: {post.phone_number}</h1>
                  <h1>Email: {post.email}</h1>
                  <h1>User Email: {post.user_email}</h1>
                  <h1>USID: {post.user_id}</h1>
                  <h1 className="text-center -ml-5 text-sm mt-3 mb-2 underline">
                    Booking Details
                  </h1>
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
                  <h1 className="text-center text-sm -ml-5 mb-2 underline">
                    Payment Details
                  </h1>
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
                  <h1 className="text-xl mt-2">Total: ${post.total}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
