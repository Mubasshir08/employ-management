import React from 'react'
import Sidebar from './Sidebar'

function Navbar() {
  return (
    <> 
    <div className='flex flex-col items-center justify-center min-h-screen py-2 md:hidden'>
        <Sidebar />
    </div>
    </>
  )
}

export default Navbar