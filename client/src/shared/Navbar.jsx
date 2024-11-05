import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Logo from '../assets/logo.png'

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <> 
    <div className='flex flex-row items-center min-h-16 py-2 md:hidden bg-red-400'>
        <div className='w-[70px] h-[50px] -mt-12'>
          <img src={Logo} alt="" srcset="" />
        </div>
        <Sidebar showSidebar = {showSidebar} setShowSidebar = {setShowSidebar}/>
    </div>

    </>
  )
}

export default Navbar