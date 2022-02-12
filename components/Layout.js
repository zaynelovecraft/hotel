import React from 'react'
import Footer from './Footer'

import NavBar from './Navbar'



export default function Layout({ children }) {
  return (
    <div>
      
      
      {/* <Nav/> */}
      <NavBar />

      <main className='bg-white'>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
