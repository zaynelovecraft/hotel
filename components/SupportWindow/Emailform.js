import React,{useState} from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import Avatarr from './Avatarr';
import Button from '../ui/Button/Button';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'
import Link from 'next/link';
import {useUser} from '../../utils/useUser'

function Emailform() {
    const [email,setEmail]=useState('')
    const [loading,setLoading]=useState(false)
    const [loadingg, setLoadingg] = useState(false);
    const { signUp, user, signIn } = useUser();

    const handleOAuthSignIn = async (provider) => {
        setLoadingg(true);
        const { error } = await signIn({ provider });
        if (error) {
          setMessage({ type: "error", content: error.message });
        }
        setLoading(false);
      };


  return (
    <div className='transition  ease-in-out h-full opacity-100 w-full overflow-hidden'>
        
    <div className='h-0'>
        <div className='relative -top-[45px] -skew-y-12 z-20 w-[421px] h-[309px] bg-cyan-300'></div>
    </div>
    <div className={`transition ease-in-out absolute h-full w-full text-center ${loading ? `z-50 opacity-50` : `z-0 opacity-0`} bg-white duration-300  `}>

    </div>
    <LoadingOutlined className={`text-cyan-500 z-50 absolute bottom-52 ${loading  ? `z-50 opacity-100` : `z-0 opacity-0` } right-40 font-extrabold text-[100px]`}/>
    <div className='absolute h-full w-full z-50 text-center'>
      <img className='relative top-10 left-[4.8rem] h-[120px] w-auto' src='/images/logowhite.png'/>
      <h1 className='relative text-[24px] top-12 font-semibold text-gray-700'>Chat with <br/> Support</h1>

    </div>
    <div className='absolute cursor-pointer hover:bg-cyan-400 bg-cyan-300  py-2 rounded-lg px-3 bottom-[4rem] z-50 left-[1.6rem]'>
        <button disabled={loadingg}  onClick={() => handleOAuthSignIn("google")}  className='z-50  items-center flex flex-row'>
            <FcGoogle className="w-[25px] h-[25px]" />
            <span className="ml-2 text-xs ">Continue with Google</span>

        </button>
    </div>
    <div className='absolute bottom-[8rem] border-2 py-1 px-4 rounded-lg cursor-pointer hover:bg-cyan-400 bg-cyan-300 left-[4.5rem] z-50'>
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