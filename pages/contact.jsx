import React from 'react';
import { useState } from 'react'
import { supabase } from '../utils/supabase-client';
import { BiMessageCheck } from "@react-icons/all-files/bi/BiMessageCheck";

const contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);
  

const contactForm = async () => {
  event.preventDefault()

  setLoading(true)
  const { data, error } = await supabase
  .from('entries')
  .insert([
    { name: name, email: email, subject: subject, message: message }
  ])
  
}


  
return (
  <div>
{loading ? (<div>
  <div className='h-screen flex flex-col  items-center  text-center'>
    <div className='text-center  mt-[100px]'>
      <h1 className='text-lg'>your form was successfully submitted</h1>
    </div>
    <div className='mt-[100px]'>
      <BiMessageCheck className='h-[100px] text-green-600 w-[100px]' />
    </div>
    <div className='h-[300px] mt-[100px] w-[400px]'>

    <h1>Thank you for contacting us! We usually respond within two business days. We look forward to speaking with you! Thank you for any feedback! </h1>
    </div>
  </div>
</div>) : (

  <div className='w-full sm:w-[500px] lg:w-[700px] md:max-w-full mx-auto'>
      <section className='p-[50px]  border-gray-300 sm:rounded-md'>
      <form onSubmit={contactForm} name="contact" id="contact-form">
        <h1 className=" text-center mb-6" id="contact">Contact Us</h1>
        <div className='mb-6'>
          <label className='block text-black'>Name</label>
          <div >
            <input
              required
              onChange={(e) => {setName(e.target.value)}}
              className='block
              bg-white
              text-black
              p-2
              placeholder-black
              pl-3
              w-full
              mt-1
              shadow-lg
              border
              border-black
              rounded-md
              
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50'
              type="text"
              placeholder="yourname"
              name="name"
            />
          </div>
        </div>
  
        <div >
          <label className='block' >Email</label>
          <div >
            <input
            onChange={(e) => {setEmail(e.target.value)}}
              className='block
  
              p-2
              pl-3
              w-full
              mt-1
              border
              border-black
              bg-white
              placeholder-black
              rounded-md
              shadow-lg
              
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              mb-6'
              type="email"
              required
              placeholder="Email input"
              name="email"
            />
            <span >
              <i ></i>
            </span>
          </div>
        </div>
  
        <div >
          <label className='block ' >Subject</label>
          <div >
            <div >
              <select
              onChange={(e)=>{setSubject(e.target.value)}}
               className='block
              p-2
              pl-2
              w-full
              mt-1
              border
              shadow-lg
              bg-white
              border-black
              rounded-md
              
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              mb-6'>
                <option value="Shipping">Shipping</option>
                <option value="Billing">Billing</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Refunds">Refunds</option>
                <option value="Question">Question</option>
              </select>
            </div>
          </div>
        </div>
  
        <div >
          <label className='block my-10 text-center' >Message</label>
          <div >
            <textarea
            onChange={(e)=>{setMessage(e.target.value)}}
              required
              className='block
              border
              w-full
              mt-1
              p-3
              h-[300px]
              bg-white
              shadow-lg
              border-black
  ]
              placeholder-black
              rounded-3xl
              box-shadow-lg
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50'
              placeholder="Enter Message"
              name="message"
            ></textarea>
          </div>
        </div>
  
        <div >
          <div className='text-center mt-5'>
            <button disabled={loading} className='border p-1 rounded-2xl px-3 bg-pink-400' type="submit">Submit</button>
          </div>
        </div>
      </form>
    </section>
  
  </div>
)}
  </div>


  ) 
  
    
}


export default contact;
