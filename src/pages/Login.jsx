import React from 'react'
import LoginForm from '../component/auth/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='relative  flex flex-col w-[90%] max-w-[300px]  p-6 border-2 border-gray-300 min-h-[600px]  '>
        <div className='ml-auto'>
            <h1 className="text-black text-2xl font-bold w-[70%] ">
            Signin to Your PopX account
            </h1>
            <div>
                <p className="text-gray-600 text-[15px]  font-semibold mt-2 w-[85%]">
                 Lorem ipsum dolor sit amet,
                 <p>
                 consectetur adipiscing elit,
                 </p>
                </p>
            </div>
             
        </div>

        <div>
         <LoginForm/>
        </div>

        {/* Additional Info */}
      <p className=" text-gray-600 text-sm">
        Need an account?<Link className="text-blue-600 hover:underline" to="/signup">Sign up here</Link>
      </p>
      </div>
    </div>
  )
}

export default Login
