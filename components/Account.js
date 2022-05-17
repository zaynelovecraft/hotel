import { useState, useEffect, useRef } from "react";
import { supabase } from "../utils/supabase-client";
import { RiAdminLine } from "@react-icons/all-files/ri/RiAdminLine";

import { useUser } from "../utils/useUser";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Reciept from "./ Reciept";

const stripePromise = loadStripe(process.env.stripe_public_key);

export default function Account({ session }) {

  const { signUp, user, signIn } = useUser();
  const [admin, setAdmin] = useState(false);
  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [pendingg, setPendingg] = useState();
  const [declineddd, setDeclineddd] = useState(false);
  const [decpost, setDecpost] = useState();
  const [modal, setModal] = useState(false);
  const [del, setDel] = useState();
  const [appy, setAppy] = useState();
  const [payed, setPayed] = useState();
  const [viewmore, setViewmore] = useState(false);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // const focus = () => {
  //   inputRef.current.scrollIntoView();
  //   setViewmore(false);
  // };

  const createCheckoutSession = async (post) => {
    // console.log(post)
    setLoading(true)
    const { data, error } = await supabase
  .from('pending_reservations')
  .select('status')
  .match({id: post.id})
    if(data[0].status !== "approved"){
      getpayed();
      getdeclined();
      getpending();
      getapproved(); 
    }
  if (data[0].status === "approved") {

    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      price: post.total,
      email: user.email,
      name: post.hotel_name,
      description: post.nights,
      id: post.id,
    });
  
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
 
  }

  setLoading(false)
  };

  // const decline = async (post) => {
  //   // const {x,y} = await supabase
  //   // .from('declined_post')
  //   // .insert(pendingg.id.post)
  //   const { data, error } = await supabase
  //     .from("pending_reservations")
  //     .update({ status: "declined" })
  //     .match({ id: post });

  // };

  const delgoogledate = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("google_date_id, hotel_name")
      .match({ id: del });

    // console.log(data[0].hotel_name)

    await axios.post("/api/delete-google-date", {
      hotel: data[0].hotel_name,
      id: data[0].google_date_id,
    });
  };
  const dell = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .update({ status: "declined" })
      .match({ id: del });
    delgoogledate();
    setModal(false);
    getdeclined();
    getpending();
    getapproved();
  };

  const confirmdel = (id) => {
    setDel(id);
    setModal(!modal);
  };

  // const deleteres = async() => {
  //   const { data, error } = await supabase
  //   .from("pending_reservations")
  //   .update({ status: "declined" })
  //   .match({ user_id: user.id, status: 'pending' });
  //   getdeclined()
  // getpending()
  // }

  const getdeclined = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user.id, status: "declined" });
    setDecpost(data);
  };
  const getapproved = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user.id, status: "approved" });
    setAppy(data);
    if (data[0]?.user_id === user.id) {
      setApproved(true);
      setPending(false);
    }
  };
  const getpayed = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user.id, status: "payed" });
    setPayed(data);
  };

  const getpending = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user.id, status: "pending" });

    // set pending tab open if pending post
    setPendingg(data);
    if (data[0]?.user_id === user.id) {
      if (approved === false) {
        setPending(true);
      }
    }
  };

  useEffect(async () => {
    getpayed();
    getdeclined();
    getpending();
    getapproved();
  }, []);

  const isadmin = async () => {
    let { data, error } = await supabase.from("is_admin").select("*");

    if (data[0]?.admin === true) {
      setAdmin(true);
    }
  };

  useEffect(() => {
    isadmin();
    // getProfile();
  }, []);

  // async function getProfile() {
  //   try {
  //     setLoading(true);
  //     const user = supabase.auth.user();

  //     let { data, error, status } = await supabase
  //       .from("profiles")
  //       .select(`username, website, avatar_url`)
  //       .eq("id", user.id)
  //       .single();

  //     if (error && status !== 406) {
  //       throw error;
  //     }

  //     if (data) {
  //       setUsername(data.username);
  //       setWebsite(data.website);
  //       setAvatarUrl(data.avatar_url);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <div>
      <div ref={inputRef} className="absolute -top-10"></div>
      <div
        className={`bg-black bg-opacity-50 justify-center items-center ${
          modal ? "flex" : "hidden"
        }  fixed inset-0 z-10 `}
      >
        <div className="bg-gray-200 max-w-sm py-2 px-3 text-gray-800 rounded shadow-xl">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Confirm Decline? </h4>
            <h4
              onClick={() => {
                setModal(false);
              }}
              className="text-lg cursor-pointer font-bold"
            >
              X{" "}
            </h4>
          </div>
          <div className="mt-2 text-sm">
            <p>This reservation will be Declined forever!</p>
          </div>
          <div className="mt-3 flex justify-end space-x-3">
            <button
              onClick={() => {
                setModal(false);
              }}
              className="px-3 py-1  rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                dell();
              }}
              className="px-3 py-1 bg-red-800 hover:bg-red-600 text-gray-200 rounded"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[500px] ">
        <div className="h-[50px] lg:h-[93px] w-full bg-gray-200"></div>
        <div className="h-12 w-full justify-between flex items-center bg-gray-200">
          <div className="flex items-center lg:ml-[100px] flex-row-reverse">
            <div className="ml-5">
              <h1 className="text-sm font-light">{user.user_metadata.name || user.email} </h1>
            </div>
            <div className="h-8 w-8">
              {user.user_metadata.avatar_url ? (

              <img
                className="rounded-full ml-2"
                src={user.user_metadata.avatar_url}
              ></img>
              ) : (
                <img className="rounded-full h-[32px] w-[32px] object-cover" src="/user.png" />
              )}
      
            </div>
          </div>
          <div className=" mr-2 ">
            <a href="/">
              <button
                className=" border border-black rounded-lg px-1 lg:mr-[100px] text-sm"
                onClick={() => supabase.auth.signOut()}
              >
                Sign Out
              </button>
            </a>
          </div>
        </div>
        {payed && (
          <section className=" w-full mt-3 ">
            <div className=" w-full">
              <div className="flex justify-around flex-wrap">
                {/*  */}
                {payed.map((post, index) => (
                  <Reciept key={index} post={post} />
                ))}

                {/*  */}
              </div>
            </div>
          </section>
        )}
        {/* <div className="w-[260px] lg:w-auto">
          <div className=" mt-5">
            <Avatar
              url={avatar_url}
              size={150}
              onUpload={(url) => {
                setAvatarUrl(url);
                updateProfile({ username, website, avatar_url: url });
              }}
            />
          </div>
          <div className=" flex  flex-col">
            <div className="text-center mb-5">
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                type="text"
                value={session.user.email}
                disabled
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="username">Name: </label>
              <input
                className="border border-black px-2 rounded-lg"
                id="username"
                type="text"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex mt-3 justify-between">
              <label htmlFor="website">Website: </label>
              <input
                className="border border-black px-2 rounded-lg "
                id="website"
                type="website"
                value={website || ""}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="  text-center p-3 ">
              <button
                className="border bg-gray-300 rounded-lg px-3"
                onClick={() => updateProfile({ username, website, avatar_url })}
                disabled={loading}
              >
                {loading ? "Loading ..." : "Update"}
              </button>
            </div>

            <div className="flex flex-row-reverse">
              <a href="/">
                <button
                  className="border bg-gray-300 rounded-lg px-3"
                  onClick={() => supabase.auth.signOut()}
                >
                  Sign Out
                </button>
              </a>
            </div>
          </div>
        </div> */}

        <div>
          <section>
            {admin === true && (
              <div className="absolute text-sm text-black lg:top-[106px] hover:bg-cyan-200  border border-black top-[62px] bg-gray-200 lg:right-[200px]  cursor-pointer  rounded-lg px-2  right-[85px]">
                <RiAdminLine className="absolute  top-[0px] text-[20px] text-gray-600 -left-[20px]" />
                <div className=" cursor-pointer">
                  <Link href={"/admindashboard"}>
                    <a>
                      <h1 className="text-center">Admin</h1>
                    </a>
                  </Link>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <h1>Reservations</h1>
            </div>
            <div className="flex space-x-2 mb-5 mt-2">
              <div
                onClick={() => {
                  setPending(!pending),
                    setApproved(false),
                    setDeclineddd(false);
                }}
                className={`${
                  pending === true ? "bg-cyan-300" : "bg-gray-300"
                } border py-1 cursor-pointer font-semibold hover:bg-cyan-300  text-sm px-2 rounded-lg `}
              >
                <h1 className="opacity-80 relative">
                  Pending
                  {pendingg?.length > 0 && (
                    <span className="absolute bg-white rounded-full px-2 -top-4 text-base animate-pulse text-red-500 ">
                      {pendingg.length}
                    </span>
                  )}
                </h1>
              </div>
              <div
                onClick={() => {
                  setApproved(!approved),
                    setPending(false),
                    setDeclineddd(false);
                }}
                className={`border cursor-pointer ${
                  approved === true ? "bg-cyan-300" : "bg-lime-400"
                } py-1 font-semibold  hover:bg-cyan-300  text-sm  rounded-lg px-3`}
              >
                <h1 className="opacity-80 relative">
                  Approved
                  {appy?.length > 0 && (
                    <span className="absolute bg-white rounded-full px-2 -top-4 text-base animate-pulse text-red-500 ">
                      {appy.length}
                    </span>
                  )}
                </h1>
              </div>
              <div
                onClick={() => {
                  setDeclineddd(!declineddd),
                    setPending(false),
                    setApproved(false);
                }}
                className={`border cursor-pointer ${
                  declineddd === true ? "bg-cyan-300" : "bg-red-400"
                } py-1 font-semibold hover:bg-cyan-300 text-sm  rounded-lg px-3`}
              >
                <h1 className="opacity-80">Declined</h1>
              </div>
            </div>
          </section>
        </div>

        {pending && (
          <section className=" w-full ">
            <div>
              <h1 className="text-center text-gray-600 mb-2">Pending</h1>
            </div>
            <div className="border mt-2 w-[200px] mx-auto mb-2"></div>
            <div className=" w-full">
              <div className="flex justify-around flex-wrap">
                {/*  */}
                {pendingg.map((post) => (
                  <div
                    key={post.id}
                    className="w-[400px] relative py-5 max-w-[400px] shadow-lg mb-5 mt-5 rounded-2xl border"
                  >
                    <div
                      onClick={() => {
                        confirmdel(post.id);
                      }}
                      className="absolute top-3 text-center hover:bg-red-500 border bg-red-200 shadow-lg cursor-pointer border-red-500 px-[5px] py-[2px] rounded-lg right-4 "
                    >
                      <h1 className="text-[10px] font-semibold">Decline </h1>
                    </div>
                    <h1 className="text-center mt-5">
                      Hotel Name:
                      <span className="text-gray-600 text-base">
                        {" "}
                        {post.hotel_name}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mt-5 mb-5 ">
                      Total Nights:{" "}
                      <span className="text-gray-600 text-base">
                        {post.nights}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm ">
                      Check-in:{" "}
                      <span className="text-gray-600 text-base">
                        3 PM {post.start_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      Check-out:{" "}
                      <span className="text-gray-600 text-base">
                        11 AM {post.end_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekdays} )
                      </span>{" "}
                      Night x (weekday price $400) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekday_price}{" "}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekend_days} )
                      </span>{" "}
                      Night x (weekend price $500) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekend_price}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Total ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.price}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Weekly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekly_discount}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Monthly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.monthly_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Early Bird Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.early_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Total guest:{" "}
                      <span className="text-gray-600 text-base">
                        {post.guest}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        {post.extra_guest}{" "}
                      </span>
                      Extra guest +
                      <span className="text-base text-lime-500">
                        {" "}
                        ${post.extra_guest_fee}
                      </span>{" "}
                      per night{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      <span className="text-base text-gray-600">
                        {post.nights}
                      </span>{" "}
                      Nights x{" "}
                      <span className="text-base text-lime-500">
                        ${post.extra_guest_fee}
                      </span>{" "}
                      ={" "}
                      <span className="text-base text-lime-500">
                        ${post.guest_fee_total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Pets{" "}
                      <span className="text-gray-600 text-base">
                        {post.pets}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      {" "}
                      Pet fee:{" "}
                      <span className="text-base text-lime-500">
                        ${post.pet_fee}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      cleaning fee{" "}
                      <span className="text-base text-lime-500">$65</span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Security Deposit{" "}
                      <span className="text-base text-lime-500">$200</span>{" "}
                    </h1>
                    <h1 className="text-center mt-5 text-2xl">
                      {" "}
                      Total :{" "}
                      <span className="text-lime-500 font-bold">
                        ${post.total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm"> </h1>
                  </div>
                ))}

                {/*  */}
              </div>
            </div>
          </section>
        )}

        {approved && (
          <section className=" w-full ">
            <div>
              <h1 className="text-center text-gray-600 mb-2">Approved</h1>
            </div>
            <div className="border mt-2 w-[200px] mx-auto mb-2"></div>
            <div className=" w-full">
              <div className="flex justify-around flex-wrap">
                {/*  */}
                {appy.map((post) => (
                  <div
                    key={post.id}
                    className="w-[400px] relative py-5 max-w-[400px] shadow-lg mb-5 mt-5 rounded-2xl border"
                  >
                    {/* <div onClick={()=>{deleteres()}} className="absolute top-4 text-center hover:bg-red-500 border cursor-pointer border-red-500 px-2 py-1 rounded-lg right-4 ">
              <h1 className="text-[10px] font-semibold">Delete </h1>
            </div> */}
                    <div
                      onClick={() => {
                        confirmdel(post.id);
                      }}
                      className="absolute bottom-4 text-center hover:bg-red-500 border bg-red-200 shadow-lg cursor-pointer border-red-500 px-[5px] py-[2px] rounded-lg right-2 "
                    >
                      <h1 className="text-[10px] font-semibold">Decline </h1>
                    </div>
                    <div
                      onClick={() => {
                        createCheckoutSession(post);
                      }}
                      className="absolute top-4 text-center hover:bg-lime-400 border shadow-lg bg-lime-200 cursor-pointer border-lime-400 px-[5px] py-[2px] rounded-lg right-2 "
                    >
                      <h1 className={`text-[10px] ${loading && 'animate-pulse'} font-semibold`}>{loading ? 'Loading...' : 'Pay Now'}</h1>
                    </div>
                    <h1 className="text-center mt-5">
                      Hotel Name:
                      <span className="text-gray-600 text-base">
                        {" "}
                        {post.hotel_name}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mt-5 mb-5 ">
                      Total Nights:{" "}
                      <span className="text-gray-600 text-base">
                        {post.nights}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm ">
                      Check-in:{" "}
                      <span className="text-gray-600 text-base">
                        3 PM {post.start_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      Check-out:{" "}
                      <span className="text-gray-600 text-base">
                        11 AM {post.end_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekdays} )
                      </span>{" "}
                      Night x (weekday price $400) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekday_price}{" "}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekend_days} )
                      </span>{" "}
                      Night x (weekend price $500) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekend_price}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Total ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.price}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Weekly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekly_discount}
                      </span>
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Monthly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.monthly_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Early Bird Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.early_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Total guest:{" "}
                      <span className="text-gray-600 text-base">
                        {post.guest}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        {post.extra_guest}{" "}
                      </span>
                      Extra guest +
                      <span className="text-base text-lime-500">
                        {" "}
                        ${post.extra_guest_fee}
                      </span>{" "}
                      per night{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      <span className="text-base text-gray-600">
                        {post.nights}
                      </span>{" "}
                      Nights x{" "}
                      <span className="text-base text-lime-500">
                        ${post.extra_guest_fee}
                      </span>{" "}
                      ={" "}
                      <span className="text-base text-lime-500">
                        ${post.guest_fee_total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Pets{" "}
                      <span className="text-gray-600 text-base">
                        {post.pets}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      {" "}
                      Pet fee:{" "}
                      <span className="text-base text-lime-500">
                        ${post.pet_fee}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      cleaning fee{" "}
                      <span className="text-base text-lime-500">$65</span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Security Deposit{" "}
                      <span className="text-base text-lime-500">$200</span>{" "}
                    </h1>
                    <h1 className="text-center mt-5 text-2xl">
                      {" "}
                      Total :{" "}
                      <span className="text-lime-500 font-bold">
                        ${post.total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm"> </h1>
                  </div>
                ))}

                {/*  */}
              </div>
            </div>
          </section>
        )}
        {declineddd && (
          <section className=" w-full ">
            <div>
              <h1 className="text-center text-gray-600 mb-2">Declined</h1>
            </div>
            <div className="border mt-2 w-[200px] mx-auto mb-2"></div>
            <div className=" w-full">
              <div className="flex justify-around flex-wrap">
                {/*  */}
                {decpost.map((post) => (
                  <div
                    key={post.id}
                    className="w-[400px] relative py-5 max-w-[400px] shadow-lg mb-5 mt-5 rounded-2xl border"
                  >
                    {/* <div onClick={()=>{deleteres()}} className="absolute top-4 text-center hover:bg-red-500 border cursor-pointer border-red-500 px-2 py-1 rounded-lg right-4 ">
              <h1 className="text-[10px] font-semibold">Delete </h1>
            </div> */}
                    <h1 className="text-center mt-5">
                      Hotel Name:
                      <span className="text-gray-600 text-base">
                        {" "}
                        {post.hotel_name}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mt-5 mb-5 ">
                      Total Nights:{" "}
                      <span className="text-gray-600 text-base">
                        {post.nights}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm ">
                      Check-in:{" "}
                      <span className="text-gray-600 text-base">
                        3 PM {post.start_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      Check-out:{" "}
                      <span className="text-gray-600 text-base">
                        11 AM {post.end_date}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekdays} )
                      </span>{" "}
                      Night x (weekday price $400) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekday_price}{" "}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        ( {post.weekend_days} )
                      </span>{" "}
                      Night x (weekend price $500) ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekend_price}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Total ={" "}
                      <span className="text-lime-500 text-base">
                        ${post.price}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Weekly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.weekly_discount}
                      </span>
                    </h1>
                    <h1 className="text-center text-sm">
                      Monthly Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.monthly_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      Early Bird Discount :{" "}
                      <span className="text-lime-500 text-base">
                        ${post.early_discount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Total guest:{" "}
                      <span className="text-gray-600 text-base">
                        {post.guest}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      <span className="text-gray-600 text-base">
                        {post.extra_guest}{" "}
                      </span>
                      Extra guest +
                      <span className="text-base text-lime-500">
                        {" "}
                        ${post.extra_guest_fee}
                      </span>{" "}
                      per night{" "}
                    </h1>
                    <h1 className="text-center mb-5 text-sm">
                      <span className="text-base text-gray-600">
                        {post.nights}
                      </span>{" "}
                      Nights x{" "}
                      <span className="text-base text-lime-500">
                        ${post.extra_guest_fee}
                      </span>{" "}
                      ={" "}
                      <span className="text-base text-lime-500">
                        ${post.guest_fee_total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Pets{" "}
                      <span className="text-gray-600 text-base">
                        {post.pets}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm mb-5">
                      {" "}
                      Pet fee:{" "}
                      <span className="text-base text-lime-500">
                        ${post.pet_fee}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      cleaning fee{" "}
                      <span className="text-base text-lime-500">$65</span>{" "}
                    </h1>
                    <h1 className="text-center text-sm">
                      Security Deposit{" "}
                      <span className="text-base text-lime-500">$200</span>{" "}
                    </h1>
                    <h1 className="text-center mt-5 text-2xl">
                      {" "}
                      Total :{" "}
                      <span className="text-lime-500 font-bold">
                        ${post.total}
                      </span>{" "}
                    </h1>
                    <h1 className="text-center text-sm"> </h1>
                  </div>
                ))}

                {/*  */}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
