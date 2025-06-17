import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../services/operations/authAPI';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);
    // console.log("user", user)

    const logoutHandler = async () => {
        dispatch(logout(navigate));
    }

    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='relative flex flex-col w-[90%] max-w-[310px]  border-2 border-gray-300 min-h-[660px] bg-white'>
                
                {/* Logout Button */}
                <div className='ml-auto p-4'>
                    {token && (
                        <button
                            onClick={logoutHandler}
                            className="text-red-500 text-lg cursor-pointer font-semibold hover:text-red-700 transition duration-200"
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Account Settings Title */}
                <p className='font-semibold text-lg px-6 pb-3 text-gray-700 border-b'>Account Settings</p>

                {/* Profile Section */}
                <div className='flex flex-col flex-grow bg-gray-100 px-6 py-8'>
                    
                    {/* Profile Picture and Name */}
                    <div className='flex items-center space-x-4'>
                        <img 
                            src="https://randomuser.me/api/portraits/women/44.jpg" 
                            alt="Profile" 
                            className="w-14 h-14 rounded-full border border-gray-300"
                        />
                        <div>
                            <p className="font-medium text-black">{user?.fullName || "Marry Doe"}</p>
                            <p className="text-gray-600 text-sm">{user?.email || "Marry@Gmail.com"}</p>
                        </div>
                    </div>
                    {/* Bio or Description */}
                    <p className="text-gray-500 text-sm">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                    <div className='border-b-2 mt-4 border-dashed border-gray-200'></div>
                    <div className='border-b-2 mt-auto border-dashed border-gray-200'></div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard
