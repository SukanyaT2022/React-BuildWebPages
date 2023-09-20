import React from 'react'
import NavBar from './Component/navBar'
import Footer from './Component/footer'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout