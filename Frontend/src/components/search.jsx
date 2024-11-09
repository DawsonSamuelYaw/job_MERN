import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="flex items-center mx-[5em] my-[2em] w-[80%] h-[5em] bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* Search Icon and Input */}
      <FaSearch className="text-gray-500 ml-3 mr-2" />
      <input
        type="text"
        placeholder="Search for jobs, companies, keywords..."
        className="w-full bg-transparent outline-none px-2 text-gray-700 placeholder-gray-500"
      />
      
      {/* Location Section with Icon, Input, and Dropdown */}
      <div className="flex items-center border-l border-gray-300 pl-4 pr-4 space-x-2">
        <FaMapMarkerAlt className="text-gray-500" />
        <input
          type="text"
          placeholder="Location"
          className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-32"
        />
        <select
          name="locationOptions"
          className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
        >
          <option value="">Choose Location</option>
          <option value="newyork">New York</option>
          <option value="sanfrancisco">San Francisco</option>
          <option value="seattle">Seattle</option>
          <option value="chicago">Chicago</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Search Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full font-medium transition-colors duration-300 mr-2">
        Search
      </button>
      
    </div>
  );
};

export default Search;
