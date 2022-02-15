import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase-client";
import Avatar from "./Avatar";

import { useUser } from "../utils/useUser";
import Link from "next/link";

export default function Account({ session }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const { signUp, user, signIn } = useUser();
  const [admin, setAdmin] = useState(false);
  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);
  const [pendingg, setPendingg] = useState();


  const deleteres = async() => {
    const { data, error } = await supabase
  .from('pending_reservations')
  .delete('*')
  .match({ user_id: user.id })
  getpending()
  }




  const getpending = async () => {
    const { data, error } = await supabase
      .from("pending_reservations")
      .select("*")
      .match({ user_id: user.id });


    setPendingg(data);
    if(data[0]?.user_id === user.id)  {setPending(true)}
    
  };


  useEffect(async () => {
   
    getpending();
  }, []);

  const isadmin = async () => {
    let { data, error } = await supabase.from("is_admin").select("*");

    if (data[0]?.admin === true) {
      setAdmin(true);
    }
  };

  useEffect(() => {
    isadmin();
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      console.log(user);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };
      console.log(updates);

      let { data, error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center border ">
        <div className="w-[260px] lg:w-auto">
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
                className="border bg-pink-400 rounded-lg px-3"
                onClick={() => updateProfile({ username, website, avatar_url })}
                disabled={loading}
              >
                {loading ? "Loading ..." : "Update"}
              </button>
            </div>

            <div className="flex flex-row-reverse">
              <a href="/">
                <button
                  className="border bg-pink-400 rounded-lg px-3"
                  onClick={() => supabase.auth.signOut()}
                >
                  Sign Out
                </button>
              </a>
            </div>
            <div className="absolute top-20 right-2">
              {admin === true && (
                <div className="mb-2 border-2 border-black max-w-[150px] mx-auto shadow-2xl p-1  hover:bg-gray-300 rounded-3xl bg-gray-400 cursor-pointer">
                  <Link href={"/admindashboard"}>
                    <a>
                      <h1 className="text-center">Admin Dashboard</h1>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <section>
            <div className="flex mb-5 mt-10">
              
              <div
                onClick={() => {
                  setPending(!pending), setApproved(false);
                }}
                className={`${
                  pending === true ? "bg-cyan-300" : "bg-gray-300"
                } border py-1 cursor-pointer font-semibold hover:bg-cyan-300   px-2 rounded-lg mr-5`}
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
                  setApproved(!approved), setPending(false);
                }}
                className={`border cursor-pointer ${
                  approved === true ? "bg-cyan-300" : "bg-lime-400"
                } py-1 font-semibold hover:bg-cyan-300 ml-5  rounded-lg px-3`}
              >
                <h1 className="opacity-80">Approved</h1>
              </div>
            </div>
          </section>
        </div>
       

        {pending && (
          <section className=" w-full ">
            
            <div>
              <h1 className="text-center text-gray-500 mb-2">Pending Reservations</h1>
            </div>
            <div className="border-b max-w-[300px] mx-auto"></div>
            <div className=" w-full">
              <div className="flex justify-around flex-wrap">
{/*  */}
          {pendingg.map((post)=>(

            <div key={post.hotel_name} className="w-[400px] relative py-5 max-w-[400px] shadow-lg mb-5 mt-5 rounded-2xl border">
              <div onClick={()=>{deleteres()}} className="absolute top-4 text-center hover:bg-red-500 border cursor-pointer border-red-500 px-2 py-1 rounded-lg right-4 ">
                <h1 className="text-[10px] font-semibold">Delete </h1>
              </div>
              <h1 className="text-center mt-5" >Hotel Name:<span className="text-gray-600 text-base"> {post.hotel_name}</span> </h1>
            <h1 className="text-center text-sm mt-5 mb-5 ">Total Nights: <span className="text-gray-600 text-base">{post.nights}</span> </h1>
            <h1 className="text-center text-sm ">Check-in: <span className="text-gray-600 text-base">3 PM {post.start_date}</span> </h1>
            <h1 className="text-center text-sm mb-5">Check-out: <span className="text-gray-600 text-base">11 AM {post.end_date}</span> </h1>
            <h1 className="text-center text-sm"><span className="text-gray-600 text-base">( {post.weekdays} )</span> Night x (weekday price $400) =  <span className='text-lime-500 text-base'>${post.weekday_price} </span></h1>
            <h1 className="text-center text-sm"><span className="text-gray-600 text-base">( {post.weekend_days} )</span> Night x (weekend price $500) = <span className="text-lime-500 text-base" >${post.weekend_price}</span> </h1>
            <h1 className="text-center mb-5 text-sm">Total = <span className="text-lime-500 text-base">${post.price}</span></h1>
            <h1 className="text-center text-sm">Weekly Discount : <span className='text-lime-500 text-base'>${post.weekly_discount}</span></h1>
            <h1 className="text-center mb-5 text-sm">Monthly Discount : <span className="text-lime-500 text-base">${post.monthly_discount}</span> </h1>
            <h1 className="text-center text-sm">Total guest: <span className='text-gray-600 text-base'>{post.guest}</span>  </h1>
            <h1 className="text-center text-sm"><span className='text-gray-600 text-base'>{post.extra_guest} </span>Extra guest +<span className='text-base text-lime-500'> ${post.extra_guest_fee}</span>  per night </h1>
            <h1 className="text-center mb-5 text-sm"><span className="text-base text-gray-600">{post.nights}</span> Nights x <span className="text-base text-lime-500">${post.extra_guest_fee}</span> = <span className="text-base text-lime-500">${post.guest_fee_total}</span> </h1>
            <h1 className="text-center text-sm">Pets <span className="text-gray-600 text-base">{post.pets}</span>  </h1>
            <h1 className="text-center text-sm mb-5"> Pet fee: <span className='text-base text-lime-500'>${post.pet_fee}</span> </h1>
            <h1 className="text-center text-sm">cleaning fee <span className="text-base text-lime-500">$65</span>  </h1>
            <h1 className="text-center text-sm">Security Deposit <span className="text-base text-lime-500">$200</span>  </h1>
            <h1 className="text-center mt-5 text-2xl"> Total : <span className='text-lime-500 font-bold'>${post.total}</span> </h1>
            <h1 className="text-center text-sm"> </h1>




            </div>
          ))}

 

            {/*  */}
              </div>
            </div>
          </section>
        )}
     
        {approved && (
          <section className="flex justify-center">
            <div className="text-center">
              <h1 className="text-gray-600">Approved</h1>
              <div className="border mt-2 w-[200px] mb-2"></div>
            </div>
            <div></div>
          </section>
        )}
      </div>
    </div>
  );
}
