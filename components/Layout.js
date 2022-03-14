import React from 'react'
import Footer from './Footer'

import NavBar from './Navbar'



export default function Layout({ children }) {
  return (
    <div>
      
      
      {/* <Nav/> */}
      <NavBar />

      <main >
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
