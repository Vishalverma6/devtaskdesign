import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "../../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("signup Data:", data);
    dispatch(signUp(data,navigate))
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="w-full ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* full Name  */}
            <div className="relative">
            <label className="absolute -top-3 left-3 bg-gray-100 px-1 text-[12px] text-purple-700">
              Full Name
            </label>
            <input
              type="fullName"
              {...register("fullName", { required: "full Name is required" })}
              className="w-full px-3 py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-gray-100 px-1 text-[12px] text-purple-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* phone number */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-gray-100 px-1 text-[12px] text-purple-700">
              Phone Number
            </label>
            <input
              type="phoneNumber"
              {...register("phoneNumber", { required: "phone Number is required" })}
              className="w-full px-3 py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter phone Number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          

          {/* Password Field */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-gray-100 px-1 text-[12px] text-purple-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* confirm password  */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-gray-100 px-1 text-[12px] text-purple-700">
              Confirm Password
            </label>
            <input
              type="confirmPassword"
              {...register("confirmPassword", { required: "confirm Password is required" })}
              className="w-full px-3 py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* company Name */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-gray-100 px-1 text-[12px] text-purple-700">
              Company Name
            </label>
            <input
              type="companyName"
              {...register("companyName", { required: "company Name is required" })}
              className="w-full px-3 py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter company Name"
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
            )}
          </div>

          {/* Are you an agency? (Radio Buttons) */}
          <div className="relative">
            <p className="text-sm font-medium text-gray-700 mb-2">Are you an agency?</p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("isAgency", { required: "Please select an option" })}
                  value="yes"
                  className="h-4 w-4 text-purple-600"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register("isAgency", { required: "Please select an option" })}
                  value="no"
                  className="h-4 w-4 text-indigo-700"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
            {errors.isAgency && (
              <p className="text-red-500 text-xs mt-1">{errors.isAgency.message}</p>
            )}
          </div>

          {/* Login Button */}
          <div className="mt-24">
            <button
            type="submit"
            className="bg-indigo-700 cursor-pointer text-white py-2 rounded-md text-sm font-medium w-full"
           >
            Create Account 
           </button>
          </div>
          
          <p className=" text-gray-600 text-sm">
            Already have an account? <Link className="text-blue-600 hover:underline" to="/login"> Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
