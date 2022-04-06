import React from 'react'

function Consent({text, text2}) {
  return (
    <div className='text-center mb-6 text-[11px]'>
        <h1>{text} <br/> you agree to our <a className='underline text-cyan-600' target='_blank' href="/termsandconditions"> Terms & Conditions</a> and <a className='underline text-cyan-600' target='_blank' href='/privacypolicy'> Privacy Policy</a></h1>
    </div>
  )
}

export default Consent