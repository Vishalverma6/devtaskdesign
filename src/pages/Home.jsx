import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
         <div className='relative  flex flex-col w-[90%] max-w-[300px]  p-6 border-2 border-gray-300 min-h-[600px]  '>
            <div className='mt-auto'>
            <h1 className="text-black text-lg font-bold ">
            Welcome to PopX
            </h1>
            <p className="text-gray-600 text-sm font-semibold mt-2">
            This project is a fully functional full-stack web application designed to provide a seamless user experience across different devices.
            </p>

            {/* Buttons */}
            <div className="flex flex-col mt-6 space-y-3">
            <button onClick={() => navigate("/signup")}
            className="bg-indigo-700 cursor-pointer text-white py-2 rounded-md text-sm font-medium">
                Create Account
            </button>
            <button 
             onClick={() => navigate("/login")}
            className="bg-purple-300 cursor-pointer text-black py-2 rounded-md text-sm font-medium">
                Already Registered? Login
            </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
