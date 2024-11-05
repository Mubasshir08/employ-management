import React, { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <> 
    <div className='flex flex-col items-center justify-center min-h-16 py-2 md:hidden bg-red-400'>
        <Sidebar showSidebar = {showSidebar} setShowSidebar = {setShowSidebar}/>
    </div>

    </>
  )
}

export default Navbar