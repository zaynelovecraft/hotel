import React, {useState} from 'react'

function Admin() {
const [resopen,setResopen] = useState(false)
const [useropen,setUseropen] = useState(false)
const [pending, setPending] = useState(false)
const [approved, setApproved] = useState(false)
const [declined, setDeclined] = useState(false)
   let today = new Date()
   let time = today.toDateString()
    
   const closeall = (x) => {
       if(x === 'res') {

           setUseropen(false)
           setPending(false)
           setApproved(false)
           setDeclined(false)
       }
       if(x=== 'user') {

           setResopen(false)
           setPending(false)
           setApproved(false)
           setDeclined(false)
       }

       if(x === 'app') {
           setPending(false)
           setDeclined(false)
       }
       if(x === 'pen') {
           setApproved(false)
           setDeclined(false)
       }
       if(x === 'dec') {
           setApproved(false)
           setPending(false)
       }
   }
  return (
     <div className='h-screen'>
         <section className='py-2 mb-5'>
             <h1 className='text-center text-gray-500'>Admin Dashboard</h1>
            <h1 className='text-center text-[12px] text-gray-400'>{time}</h1>
         </section>
         <section>
             <div className=' pb-2 border-b'>
                <div className='flex justify-center'>
                    <h1 onClick={()=>{setResopen(!resopen), closeall('res')}} className={`mr-4 relative  text-gray-700  cursor-pointer ${resopen === true && 'text-cyan-500'} hover:text-cyan-500 text-sm`}>Reservations {resopen === false && (<span className='absolute text-red-500 text-[10px] animate-pulse font-bold -top-1 '>2</span>)} </h1>
                    <h1 onClick={()=>{setUseropen(!useropen), closeall('user')}} className='mr-4 cursor-pointer  text-gray-700  hover:text-cyan-500 text-sm'>Users</h1>
                    <h1 className='text-sm relative cursor-pointer text-gray-700 hover:text-cyan-500'>Messages <span className='absolute text-red-500 text-[10px]  animate-pulse font-bold -top-1 '>99+</span></h1>
                </div>
             </div>
         </section>

        {useropen === true && (
            <div className='mt-2'>
                <h1 className='text-gray-500 text-center'>All Authenticated Users</h1>
            </div>
        )}
         {resopen === true && (

         <section>
             <div className='border flex-row  bg-gray-200'>
                
<div className='flex mt-2 mb-2 justify-center'>

                 <div><h1 onClick={()=>{setPending(!pending),closeall('pen')}} className={`mr-4 cursor-pointer ${pending === true && 'text-cyan-500'}  relative hover:text-cyan-500 text-[12px]`}>Pending <span className='absolute text-red-500 text-[10px] animate-pulse font-bold -top-1 '>2</span> </h1></div>
                 <div><h1 onClick={()=> {setApproved(!approved), closeall('app')}} className={`mr-4  cursor-pointer hover:text-cyan-500 text-[12px] ${approved === true && 'text-cyan-500'}`}>Approved</h1></div>
                 <div><h1 onClick={()=>{setDeclined(!declined), closeall('dec')}} className=' text-[12px] cursor-pointer  hover:text-cyan-500'>Declined</h1></div>
</div>
             </div>
         </section>
         )}
         {approved === true && (
             <div className='mt-4'><h1 className='text-center text-sm  text-gray-600'>Approved Reservations</h1></div>
         )}
         {pending === true && (
             <div className='mt-4'><h1 className='text-center text-sm  text-gray-600'>Pending Reservations</h1></div>
         )}
         {declined === true && (
             <div className='mt-4'><h1 className='text-center text-sm  text-gray-600'>Declined Reservations</h1></div>
         )}
     </div>
  )
}

export default Admin