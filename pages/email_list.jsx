import React from "react";
import { useEffect, useState, FormEvent } from "react";
import { RiMailCheckLine } from "@react-icons/all-files/ri/RiMailCheckLine";
import { supabase } from "../utils/supabase-client";

function email_list() {
    const [newemail, setNewemail] = useState("");
    const [newloading, setNewloading] = useState(false);

    const contactForm = async () => {
        event.preventDefault();
    
        setNewloading(true);
        const { data, error } = await supabase
          .from("emails")
          .insert([{ email: newemail }]);
      };

  return (
    <div>
      {newloading ? (
        <div className="flex h-screen items-center justify-center flex-col">
          <div className=" mb-2 mt-24">
            <h1 className="text-xl">Thanks!</h1>
          </div>
          <RiMailCheckLine className=" text-pink-400 w-10 h-10" />
        </div>
      ) : (
        <div className="h-screen">
          <form onSubmit={contactForm}>
            <div class="field">
              <label className="block text-center mt-[100px] text-lg" for="email">
                Join Our Monthly News Letter
              </label>
              <div class=" flex justify-center items-center">
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
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
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
  );
}

export default email_list;
