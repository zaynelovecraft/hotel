import React, {useState} from 'react'
import { supabase } from '../../utils/supabase-client'

function AdminSendMessage({talk}) {
    const [message, setMessage] = useState('')
    console.log(talk.id)


    const sendMessage = async (e) => {
        e.preventDefault();
        if (!message) return;
    
        const { data, error } = await supabase
          .from("Messages")
          .select("*")
          .match({ id: talk.id });
    
     
        
          let messages = data[0].Message_data;
          messages.push({
            text: message,
            user: 'Admin',
            userid: "Admin",
            time: new Date()
          });
    
          const { dataa, errorr } = await supabase
            .from("Messages")
            .update({ Message_data: messages, read: true })
            .match({ id: talk.id });
        
    
        
        setMessage("");
      };

      // 
  return (
    <div>
        <form className='flex absolute -bottom-[0.1rem] left-[0.1rem] z-40 bg-white items-center align-middle rounded-lg w-[100%] mr-[0.1rem] border-2 border-gray-200 pl-4 pr-2 py-2 '>
        <input
            value={message}
            placeholder='Enter a Message '
            onChange={(e) => setMessage(e.target.value)}
            className='flex-grow pr-[50px] bg-white  outline-none bg-transparent text-black placeholder-gray-500 '
            type='text'
        />
        <button
         onClick={sendMessage}
        type='submit'
        className='font-bold align-middle absolute -right-[2px] p-[0.70rem] active:bg-cyan-200 hover:bg-gray-300  bg-gray-200 border-gray-500 rounded-lg text-sm text-pink-500'
        >Send</button>
        </form>
    </div>
  )
}

export default AdminSendMessage