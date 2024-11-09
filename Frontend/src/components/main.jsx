import React from 'react';
import { RxAvatar } from "react-icons/rx";
import Im from '../imgs/hh.png';

const Main = () => {
  return (
    <div className="main font-[poppins] flex flex-col-reverse md:flex-row items-center justify-around bg-gradient-to-r from-[#4F46E5] to-[#60A5FA] p-8 md:p-16 text-white space-x-[7em]">
      
      {/* Left Container */}
      <div className="main__container max-w-lg md:text-left text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Find a Job in the World’s Leading Companies
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          We help you find the best job to build your future in the digital era.
        </p>
        
        {/* Buttons */}
        <div className="join flex flex-col md:flex-row items-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="join__btn bg-[#14B8A6] hover:bg-[#FBBF24] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="relative   md:p-14 rounded-[2rem] shadow-lg text-white">
        
        {/* Main Image */}
        <div className="flex justify-center relative">
          <img
            src={Im}
            alt="Job search illustration"
            className="rounded-[2rem] w-[500px]" // Adjust max-w-sm to control size
          />
        </div>

        {/* Floating Notification Boxes */}
        <div className="absolute top-[60px] left-[50px] bg-white text-black p-3 rounded-lg shadow-md text-sm">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              📅
            </div>
            <div>
              <p className="font-semibold">1k</p>
              <p className="text-xs">Assisted Candidates</p>
            </div>
          </div>
        </div>

        <div className="absolute top-[150px] right-[80px] bg-white opacity-[50px] text-black p-3 rounded-lg shadow-md text-sm">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              📩
            </div>
            <div>
              <p className="font-semibold">Congratulations</p>
              <p className="text-xs">You have been hired</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-8 bg-white text-black p-3 rounded-lg shadow-md text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
            <RxAvatar className='w-full h-full'/>

            </div>
            <div>
              <p className="font-semibold">Job Interview Today</p>
              <p className="text-xs">Today at 12:00 PM</p>
              <button className="bg-pink-500 text-white px-3 py-1 rounded-full mt-1 text-xs font-medium hover:bg-pink-600">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
