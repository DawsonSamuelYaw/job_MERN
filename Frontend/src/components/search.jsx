import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="flex items-center mt-5 w-full max-w-md mx-auto bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <FaSearch className="text-gray-500 ml-3 mr-2" />
      <input
        type="text"
        placeholder="Search for jobs, companies, keywords..."
        className="w-full bg-transparent outline-none px-2 text-gray-700 placeholder-gray-500"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full font-medium transition-colors duration-300 mr-2">
        Search
      </button>
    </div>
  );
};

export default Search;
