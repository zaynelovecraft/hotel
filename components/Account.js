import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase-client";
import Avatar from "./Avatar";
import ProductCard from "./ProductCard";
import { useUser } from "../utils/useUser";

export default function Account({ session, products }) {
  const [likedpost, setLikedpost] = useState();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const { signUp, user, signIn } = useUser();



  const returnLikedProducts = async () => {
    const { data, error } = await supabase
      .from("likedpost")
      .select("userid, likedpost")
      .match({ userid: user.id });

    if (data[0] === undefined) {
      return;
    } else {
      const productList = products;
      const newlist = [];
      for (let i = 0; i < productList.length; i++) {
        for (let z = 0; z < data[0].likedpost.length; z++) {
          if (productList[i].node.id === data[0].likedpost[z]) {
            newlist.push(productList[i]);
          }
        }
      }
      setLikedpost(newlist);
    
    }
  };

  useEffect(() => {
    returnLikedProducts();
    getProfile()
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
      console.log(user)

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };
      console.log(updates)

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
            <input id="email" type="text" value={session.user.email} disabled />
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
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-center font-extrabold text-gray-900 mb-6">
            Liked Products
          </h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {likedpost?.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
