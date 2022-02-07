
import React, {useState, useEffect, useRef,} from "react";
import { useUser } from "../utils/useUser";

import { supabase } from "../utils/supabase-client";
// import { userInfo } from "os";
import SendMessage from "./SendMessage";
import Message from "./Message";



function Messages({ product }) {
    const { user, signIn } = useUser();
    const [username, setUsername] = useState('');
    const [avatarUrl, setAvatarUrl] = useState(null);
    const endOfMessagesRef = useRef(null)
    const [comments, setComments] = useState([]);
   
    

    useEffect(() => {
        getComments()
        getProfile();
      }, []);

      async function getComments() {
        const { data, error } = await supabase
          .from("comments")
          .select("productid, comments")
          .like("productid", product.id);
        if (data[0] === undefined) {
          console.log("product not found");
          const { data, error } = await supabase
            .from("comments")
            .insert([{ productid: product.id }]);
          console.log("product created", data);
          
        } else {
          if (data) {
             console.log('data found')
            const newdata = data[0].comments;
             console.log(newdata)
            setComments(newdata);
             console.log("data in comments", comments)
          }
        }
      }

    async function getProfile() {
        try {

          console.log('get pofile ran')
    
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

            setAvatarUrl(data.avatar_url);
          
          }
        } catch (error) {
          
        } finally {

        }
      }
  return (
    <div className="">

      <div className='border max-w-2xl overflow-y-scroll h-[350px] lg:h-[300px] w-11/12 mx-auto mt-3 mb-4 bg-white  rounded-2xl p-4 shadow-lg'>
          <div className="space-y-10 p-4">
            
            {comments.map(message => (
                <Message key={Math.random()} message={message} />
            ))}
              
                
              
            
          </div>
          <div  className="text-center text-xs font-light mt-5">
              <p>
                  You are up to date! {username}
              </p>
          </div>
      </div>
          <div ref={endOfMessagesRef} className=" ">
             <SendMessage getComments={getComments} url={avatarUrl} comments={comments} endOfMessagesRef={endOfMessagesRef} product={product} username={username} />
          </div>
    </div>
    )
}
    
export default Messages;
