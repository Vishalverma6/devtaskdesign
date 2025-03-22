import React from 'react'
import SignUpForm from '../component/auth/SignUpForm'

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='relative  flex flex-col w-[90%] max-w-[300px]  p-6 border-2 border-gray-300 min-h-[600px]  '>
        <div className='ml-auto'>
            <h1 className="text-black w-[70%] text-2xl font-bold ">
            Create Your PopX Account 
            </h1>
            
        </div>
        <div>
          <SignUpForm/>
        </div>
      </div>
    </div>
  )
}

export default Signup
