import React from 'react'
import Emailform from './Emailform'

function Supportwindow({visible}) {
  return (
    <div>
      
      <div className={`transition ease-in-out fixed right-[19px] z-20 ${visible === true ? `opacity-100 ` : `opacity-0`} rounded-lg bottom-[111px] w-[430px] h-[540px] bg-cyan-200 duration-300`} ></div>
    <div className={`transition ease-in-out fixed bottom-[116px] ${visible === true ? `opacity-100 ` : `opacity-0`}  z-30 right-[24px] w-[420px] h-[530px] bg-white rounded-lg overflow-hidden shadow-lg duration-300`} >
      <Emailform />
    </div>
    </div>
  )
}

export default Supportwindow