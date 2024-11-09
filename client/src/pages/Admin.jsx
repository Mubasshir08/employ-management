import React from 'react'

function Admin() {
  return (
    <div>
        <h3 className='text-center text-lg mt-3 mb-2'>Hello Admin !</h3>
        <h3 className='text-center text-2xl'>Set The Office !</h3>
        <form action="" method="post">
          <label htmlFor="name" className='flex justify-around px-5 mt-5'>
            <h5>Employ Name :</h5>
            <input type="text" name="name" id="name" className='border-b-2 w-1/2 focus:outline-none'/>
          </label>
          <label htmlFor="name" className='flex justify-around px-5 mt-5'>
            <h5>Employ Email :</h5>
            <input type="text" name="name" id="name" className='border-b-2 w-1/2 focus:outline-none'/>
          </label>
          <label htmlFor="name" className='flex justify-around px-5 mt-5'>
            <h5>Work - Pay :</h5>
            <input type="number" name="name" id="name" className='border-b-2 w-1/2 focus:outline-none ml-5'/>
          </label>
          <label htmlFor="name" className='flex justify-around px-5 mt-5'>
            <h5>Deduction :</h5>
            <input type="number" name="name" id="name" className='border-b-2 w-1/2 focus:outline-none ml-5'/>
          </label>
          <label htmlFor="name" className='flex px-10 mt-5'>
            <h5 className='mr-20'>Leave :</h5>
            <input type="month" name="name" id="name" className='w-1/5 focus:outline-none ml-1'/>
            <input type="number" name="name" id="name" className='border-2 w-1/3 focus:outline-none ml-2'/>
          </label>
          
        </form>
    </div>
  )
}

export default Admin