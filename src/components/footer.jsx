import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer bg-[#6B7280] mt-4 p-6 text-white font-[poppins]">
      <div className="flex flex-col md:flex-row md:justify-around md:space-y-0 space-y-6">
        
        {/* Company Info Section */}
        <div className="foot-1 w-full md:w-[25%]">
          <h1 className="text-2xl font-bold">JobHub</h1>
          <div className="about mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id quod facilis nesciunt ullam, sed culpa. Consequatur id error odio dolores deserunt dolorum veritatis, sint aspernatur illo, dicta tenetur praesentium!
          </div>
          <div className="social flex space-x-2 mt-3 text-[#14B8A6]">
            <FaXTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaLinkedin />
          </div>
        </div>
        
        {/* About Us Section */}
        <div className="foot-2 w-full md:w-[25%]">
          <h1 className="text-xl font-semibold">About Us</h1>
          <nav className="mt-2 flex flex-col space-y-1 text-sm">
            <a href="#">Company History</a>
            <a href="#">Our Team</a>
            <a href="#">Employee Handbook</a>
            <a href="#">Careers</a>
          </nav>
        </div>

        {/* Our Services Section */}
        <div className="foot-3 w-full md:w-[25%]">
          <h1 className="text-xl font-semibold">Our Services</h1>
          <ul className="mt-2 flex flex-col space-y-1 text-sm">
            <li>Job Search</li>
            <li>Resume Assistance</li>
            <li>Career Coaching</li>
            <li>Interview Prep</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="foot-4 w-full md:w-[25%]">
          <h1 className="text-xl font-semibold">Contact Us</h1>
          <form action="" className="flex flex-col space-y-2 mt-2 text-sm">
            <input type="text" placeholder="Name" className="p-2 rounded bg-gray-700 text-white" />
            <input type="email" placeholder="Email" className="p-2 rounded bg-gray-700 text-white" />
            <textarea placeholder="Message" className="p-2 rounded bg-gray-700 text-white"></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Submit</button>
          </form>
        </div>
      </div> <br />
      <hr />
    </div>
  );
}

export default Footer;
