import React from 'react'
import { useUser } from '../../utils/useUser'
import TimeAgo from 'timeago-react'

function AdminMessage({message, talk}) {
    const { signUp, user, signIn } = useUser();

    const isUserMessage = message.userid === 'Admin';
  return (
    <div>
        <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
            <div className={`space-x-4 p-3 max-w-[200px] lg:max-w-[300px] sm:max-w-[250px]  rounded-lg ${isUserMessage ? 'rounded-br-none bg-yellow-300' : 'rounded-bl-none bg-gray-200'}`}>
                <p className='break-words'>{message.text}</p>
            </div>
            <TimeAgo 
      className={`text-[10px] italic text-gray-400 ${isUserMessage ? 'order-first pr-1' : ''}`}
        datetime={message.time}
      />
      <p className={`absolute -bottom-4 -left-2 ${isUserMessage ? 'hidden' : 'text-blue-400 text-xs'}`} >
          {talk.user_email}
      </p>
        </div>
    </div>
  )
}

export default AdminMessage