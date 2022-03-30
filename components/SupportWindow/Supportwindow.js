import React from 'react'
import Emailform from './Emailform'
;

function Supportwindow({visible}) {
  return (
    <div>
      
      <div className={`transition ease-in-out fixed right-[17px] z-20 ${visible === true ? `opacity-100 ` : `opacity-0`} rounded-lg bottom-[111px] w-[245px] h-[450px] bg-cyan-200 duration-300`} ></div>
    <div className={`transition ease-in-out fixed bottom-[116px] ${visible === true ? `opacity-100 ` : `opacity-0`}  z-30 right-[24px] w-[232px] h-[439px] bg-white rounded-lg overflow-hidden shadow-lg duration-300`} >
      <Emailform />
    </div>
    </div>
  )
}

export default Supportwindow