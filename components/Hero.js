import Link from "next/link";
// import Button from "./ui/Button/Button";
import { useEffect, useState, FormEvent } from "react";
import { useUser } from "../utils/useUser";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabase-client";
import { RiMailCheckLine } from "@react-icons/all-files/ri/RiMailCheckLine";

export default function Hero() {
  const { user, signIn } = useUser();
  const [loading, setLoading] = useState(false);
  const [newloading, setNewloading] = useState(false);
  // const [email, setEmail] = useState("");
  const [newemail, setNewemail] = useState("");
  const router = useRouter();

  const handleOAuthSignIn = async (provider) => {
    setLoading(true);
    const { error } = await signIn({ provider });
    if (error) {
      setMessage({ type: "error", content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  const contactForm = async () => {
    event.preventDefault();

    setNewloading(true);
    const { data, error } = await supabase
      .from("emails")
      .insert([{ email: newemail }]);
  };
  return (
    <div className=" flex flex-col -mt-[50px] justify-center h-screen items-center text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">
          Best Online Gloomy Bear Store
        </p>
        <p className="text-pink-400 text-4xl sm:text-6xl md:text-7xl">
          Cute and Gloomy
        </p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        Shop Now
      </h2>
      <div className="mt-5 max-w-md mx-auto  flex justify-center items-center md:mt-8">
        {!user && (
          <div className="">
            <button
              className="inline-flex   text-sm items-center justify-center h-8  px-1 sm:h-12 sm:px-6  font-medium py-3 border-transparent rounded-md text-black bg-white hover:bg-pink-300 ring-2 ring-pink-300"
              variant="slim"
              type="submit"
              disabled={loading}
              onClick={() => handleOAuthSignIn("google")}
            >
              <span className="ml-2">Sign In with</span>
              <FcGoogle className="ml-2" />
              {/*  */}
            </button>
          </div>
        )}
        <Link href="/products">
          <a
            className={`inline-flex text-sm ${
              !user && "ml-3"
            } items-center justify-center h-8 px-2 sm:h-12 sm:px-6 font-medium py-3 border-transparent rounded-md text-black bg-pink-400 hover:bg-pink-300`}
          >
            Start Shopping
          </a>
        </Link>
      </div>
      {user ? (
        <div></div>
      ) : (
        <div>
          {newloading ? (
            <div className="flex items-center justify-center flex-col">
              <div className=" mb-2 mt-24">
                <h1 className="text-xl">Thanks!</h1>
              </div>
              <RiMailCheckLine className=" text-pink-400 w-10 h-10" />
            </div>
          ) : (
            <div>
              <form onSubmit={contactForm}>
                <div >
                  <label className="block mt-[100px] text-lg">
                    Join Our Monthly News Letter
                  </label>
                  <div className=" flex justify-center items-center">
                    <input
                      onChange={(e) => {
                        setNewemail(e.target.value);
                      }}
                      className="block

              p-2
              
              w-90
              mt-1
              border
              border-black
              bg-white
              placeholder-black
              rounded-md
              shadow-lg
              text-center
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              "
                      type="email"
                      required
                      placeholder="Enter Email"
                      name="email"
                    />
                    <span >
                      <i ></i>
                    </span>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button
                    disabled={newloading}
                    className="border shadow-lg p-1 rounded-2xl px-3 bg-pink-400"
                    type="submit"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
