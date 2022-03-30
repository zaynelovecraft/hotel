import React,{useState} from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import Avatar from './Avatar';
import Button from '../ui/Button/Button';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'
import Link from 'next/link';
import {useUser} from '../../utils/useUser'
import axios from 'axios';
import { useEffect } from 'react';

function Emailform(props) {
    const [email,setEmail]=useState('')
    const [loading,setLoading]=useState(false)
    const [loadingg, setLoadingg] = useState(false);
    const { signUp, user, signIn } = useUser();
    console.log(email)
    
    
    const handleOAuthSignIn = async (provider) => {
        setLoadingg(true);
        const { error } = await signIn({ provider });
        if (error) {
          setMessage({ type: "error", content: error.message });
        }
        setLoading(false);
      };

    //   function getOrCreateUser(callback) {
    //     axios.put(
    //         'https://api.chatengine.io/users/',
    //         {username: email, email: email, secret: email},
    //         {headers: {"Private-Key": process.env.CHATAPP_KEY}}
    //     )
    //     .then(r => callback(r.data))
    //     .catch(e => console.log('Get or create user error', e))
    // }

    // function getOrCreateChat(callback) {
    //     axios.put(
    //         'https://api.chatengine.io/chats/',
    //         {usernames: ['Admin', email], is_direct_chat: true},
    //         {headers: {
    //             "Private-Key": process.env.CHATAPP_KEY,
                
    //         }}
    //     )
    //     .then(r => callback(r.data))
    //     .catch(e => console.log('Get or create chat error', e))
    // }

    //   useEffect(()=>{
        
    //     getOrCreateUser(

    //       chatuser => {
    //         props.setChatuser(chatuser)

    //         getOrCreateChat(
    //           chat => 
              
    //             props.setChat(chat)
         
              
                
    //         )
    //     })

    //   },[email])

      useEffect(() => {
        if(user){
          setEmail(user.email)
          props.setChatuser(email)
          props.setChat(email)
        

        }
      }, [user])

  return (
    <div className={`transition ${props.visible ?  `flex` :  `hidden`} h-full opacity-100 ease-in-out   w-full overflow-hidden`}>
        
    <div className='h-0'>
        <div className='relative -top-[45px] -skew-y-12 z-20 w-[421px] h-[309px] bg-cyan-300'></div>
    </div>
    <div className={`transition ease-in-out absolute h-full w-full text-center ${loading ? `z-30 opacity-50` : `z-0 opacity-0`} bg-white duration-300  `}>

    </div>
    <LoadingOutlined className={`text-cyan-500 absolute bottom-52 ${loading  ? `z-40 opacity-100` : `z-0 opacity-0` } right-40 font-extrabold text-[100px]`}/>
    <div className='absolute h-full w-full z-30 text-center'>
      <img className='relative top-10 sm:left-[7.7rem] lg:left-[9.6rem] left-[6.9rem] h-[120px] w-auto' src='/images/logowhite.png'/>
      <h1 className='relative text-[24px] top-12 font-semibold text-gray-700'>Chat with <br/> Support</h1>

    </div>
    <div className='absolute cursor-pointer hover:bg-cyan-400 border-2 bg-cyan-300  py-2 rounded-lg px-3 bottom-[4rem] lg:bottom-[5rem] z-40 lg:left-[6.5rem] sm:left-[4.5rem] left-[4rem]'>
        <button disabled={loadingg}  onClick={() => handleOAuthSignIn("google")}  className='z-30  items-center flex flex-row'>
            <FcGoogle className="w-[25px] h-[25px]" />
            <span className="ml-2 text-xs ">Continue with Google</span>

        </button>
    </div>
    <div className='absolute bottom-[8rem] lg:bottom-[10rem] border-2 py-1 px-4 rounded-lg cursor-pointer hover:bg-cyan-400 bg-cyan-300 lg:left-[9.8rem] sm:left-[7.7rem] left-[7.2rem] z-30'>
        <Link href='/signin'>
            <a >
        <h1>Sign In</h1>

            </a>
        </Link>
    </div>
    </div>

    
  )
}

export default Emailform