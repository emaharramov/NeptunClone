import React from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
