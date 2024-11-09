import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
function Login() {
  return (
    <div className=''>
        <form action="" method="post" className='w-4/5 px-10 py-10 mx-auto mt-10 border rounded-lg'>
            <h3 className='text-2xl text-center'>Welcome</h3>
            <input type="email" name="" id="" className='border-b-2 bg-transparent my-5 py-2 focus:outline-none' placeholder='email'/>
            <input type="password" name="" id="" className='border-b-2 bg-transparent py-2 focus:outline-none' placeholder='password'/>
            <button type="submit" className='bg-black text-white w-full h-10 mt-6 rounded-md'>Sign in</button>
            <button type="submit" className='bg-slate-100 w-full h-10 mt-6 rounded-md'> <FontAwesomeIcon icon ={faGoogle} className='-ml-3 mr-1'/> Continue with Google</button>
            
        </form>
    </div>
  )
}

export default Login