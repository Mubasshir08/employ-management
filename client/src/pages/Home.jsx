import React from 'react'

function Home() {
  return (
    <section>
      <div className='text-center mt-5'>
          <h3 className=''>Welcome !</h3>
          <h3 className='text-2xl'>Fhamida Afrin Sneha</h3>
      </div>
      <div className='grid grid-cols-2 pr-2.5 py-10'>
        <div className='bg-neutral-100 rounded-2xl py-3 px-3 mt-3 ml-2'>Activity <span className='text-red-400 ml-16'>Bad</span></div>
        <div className='bg-neutral-100 rounded-2xl py-3 px-2 mt-3 ml-2'>Total Earning <span className='text-green-800 ml-1'>200 BDT</span></div>
        <div className='bg-neutral-100 rounded-2xl py-3 px-3 mt-3 ml-2'>Total Leave <span className='text-red-400 ml-10'>10</span></div>
        <div className='bg-neutral-100 rounded-2xl py-3 px-3 mt-3 ml-2'>Total Deduction <span className='text-red-400 ml-3'>4</span></div>
      </div>
    </section>
  )
}

export default Home