import { useState } from "react";
import axios from "axios";
import {
  FaHome,
  FaBriefcase,
  FaFileAlt,
  FaBuilding,
  FaInfoCircle,
} from "react-icons/fa";

const Header = () => {
  // User states for registering
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-workspace-api-1.onrender.com/api/v1/users/register", {
        userName,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        setIsModalOpen(false); // Close modal on successful submission
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="main bg-[#1E3A8A] p-4 md:p-6 lg:p-8 font-[poppins] text-white">
        <div className="flex justify-between items-center">
          <div className="sub-1 py-2">
            <h1 className="text-2xl font-bold">JobHub</h1>
          </div>
          {/* Hamburger Icon / Close Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex md:space-x-8 flex-grow justify-center">
            <nav className="flex space-x-4">
              <a href="#" className="flex items-center hover:underline">
                <FaHome className="mr-1" /> Home
              </a>
              <a href="#" className="flex items-center hover:underline">
                <FaBriefcase className="mr-1" /> Jobs
              </a>
              <a href="#" className="flex items-center hover:underline">
                <FaFileAlt className="mr-1" /> Resume Builder
              </a>
              <a href="#" className="flex items-center hover:underline">
                <FaInfoCircle className="mr-1" /> About Us
              </a>
            </nav>
          </div>
          {/* Sign in and Buttons for larger screens */}
          <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
            <button onClick={toggleModal} className="hover:font-extrabold">
              Sign up
            </button>
            <div className="sub flex space-x-2">
              <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300">
                Sign in
              </button>
              <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300">
                Post Job
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-4 transition-all duration-300 ease-in-out transform ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <nav
              className={`flex flex-col space-y-2 transition-all duration-300 ease-in-out`}
            >
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-blue-600 rounded flex items-center`}
              >
                <FaHome className="mr-1" /> Home
              </a>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-blue-600 rounded flex items-center`}
              >
                <FaBriefcase className="mr-1" /> Jobs
              </a>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-blue-600 rounded flex items-center`}
              >
                <FaFileAlt className="mr-1" /> Resume Builder
              </a>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-blue-600 rounded flex items-center`}
              >
                <FaBuilding className="mr-1" /> Companies
              </a>
              <a
                href="#"
                className={`block py-2 px-4 hover:bg-blue-600 rounded flex items-center`}
              >
                <FaInfoCircle className="mr-1" /> About Us
              </a>
              <div className="sub flex space-x-2">
                <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300">
                  Sign in
                </button>
                <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition duration=300">
                  Post Job
                </button>
              </div>
            </nav>
          </div>
        )}

        {/* Sign-Up Modal */}
        {isModalOpen && (
          <>
            {/* Overlay */}
            <div
              onClick={toggleModal}
              className="fixed inset-0 bg-black opacity-50 z-[100] cursor-pointer"
            />
            {/* Modal */}
            <div
              className={`fixed inset-x-auto top-[20%] mx-auto w-full max-w-md bg-white rounded-lg shadow-lg z-[200] p-5 transition-transform transform ${
                isModalOpen ? "translate-y-[0]" : "translate-y-[100%]"
              }`}
            >
              <h2 className="text-xl font-bold mb-4">Sign Up</h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-6 space-y-4 max-w-md mx-auto"
              >
                {/* Username Field */}
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-[10px] rounded-md hover:bg-blue-800 transition duration-[200ms] shadow-md hover:shadow-lg"
                >
                  Sign Up
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={toggleModal}
                  className="mt-[10px] w-full text-center text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
                >
                  Cancel
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;