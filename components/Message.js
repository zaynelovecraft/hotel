import React from 'react';
import { useState, useEffect } from 'react';
import { useUser } from "../utils/useUser";

import { supabase } from '../utils/supabase-client'

function Message({message, }) {
    const { user, signIn } = useUser();

    const [avatarUrl, setAvatarUrl] = useState(null)

    const isUserMessage = message.userid === user?.id
    
    const url = message.userpfp

// 
    useEffect(() => {
      let isApiSubscribed = true;
        
        if (isApiSubscribed) {
          // handle success
          if (url) downloadImage(url)
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
      }
    }
      }, [])

      async function downloadImage(path) {
        try {
          const { data, error } = await supabase.storage.from('avatars').download(path)
          if (error) {
            throw error
          }
          const url = URL.createObjectURL(data)
          setAvatarUrl(url)
        } catch (error) {
          console.log('Error downloading image: ', error.message)
        }
      }

  return ( 

<div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
    {url && (

    <div className={`relative h-8 w-8 ${
        isUserMessage && 'order-last ml-2'
    }`}>
    
    <img
          className='rounded-full'
          src={avatarUrl}
          alt="Avatar"
          width=''
          height=''
          
        />

    </div>
    )}
    <div className={` relative w-[250px]  space-x-4 p-3 rounded-lg ${isUserMessage ? "rounded-br-none bg-pink-300 " : "rounded-bl-none bg-gray-200"}`}>
        <p className='break-words'>{message.comment}</p>
    </div>
    <p className={`absolute -bottom-5 text-xs ${
        isUserMessage ? 'text-pink-300' : 'text-black'
    } `}>{message.username}</p>
</div>
      
      ) 
}

export default Message;
