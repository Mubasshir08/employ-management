// src/pages/Dashboard.jsx
import React from 'react';

function Dashboard() {
  return (
    <section>
      <h2 className='text-center text-lg mt-3'>Dashboard</h2>
      {/* current-month */}
        <div className='mt-5 mx-auto px-3 py-2 rounded-lg bg-neutral-100 w-[90vw]'>
            <div className='flex justify-between my-1'>
                <h3>This Month</h3>
                <h3>November</h3>
            </div>
             <div className='flex justify-between my-1'>
                <h3>Leave</h3>
                <h3 className=''>2</h3>
            </div>
            <div className='flex justify-between my-1 text-red-600'>
                <h3>Deduction</h3>
                <h3 className=''>3 (-300 BDT)</h3>
            </div>
            <div className='flex justify-between my-1 text-green-700'>
                <h3>Income</h3>
                <h3 className=''>40 BDT</h3>
            </div>
        </div>
        {/* current-month */}
        <h2 className='text-center text-lg mt-3'>Overall</h2>
    </section>
  );
}

export default Dashboard;
