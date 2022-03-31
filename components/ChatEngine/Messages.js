import React, {useRef} from 'react'
import SendMessage from './SendMessage'

function Messages({user}) {
    const endRef = useRef(null); 
  return (
    <div className='pb-56'>
        <div>
            {/* Messages */}
 
        </div>

        <div className='flex justify-center'>
         <SendMessage user={user} endRef={endRef} />
        </div>

        <div ref={endRef} className='text-center mt-5'>
             <p>
                 You are up to date
             </p>
        </div>
    </div>
  )
}

export default Messages