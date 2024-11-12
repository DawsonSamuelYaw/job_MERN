import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center my-5 mx-4 sm:mx-8 p-4 sm:h-16 bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-3 sm:space-y-0">
      
      {/* Search Icon and Input */}
      <div className="flex items-center flex-grow w-full sm:w-auto">
        <FaSearch className="text-gray-500 ml-3 mr-2" />
        <input
          type="text"
          placeholder="Search for jobs, companies, keywords..."
          className="flex-grow bg-transparent outline-none px-2 text-gray-700 placeholder-gray-500"
        />
      </div>

      {/* Location Section with Icon, Input, and Dropdown */}
      <div className="flex items-center border-t sm:border-t-0 sm:border-l border-gray-300 pt-3 sm:pt-0 pl-0 sm:pl-4 pr-4 w-full sm:w-auto">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Location"
          className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full sm:w-24 md:w-32 lg:w-48 mr-2"
        />
        <select
          name="locationOptions"
          className="bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm w-full sm:w-auto"
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
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full font-medium transition-colors duration-300 w-full sm:w-auto">
        Search
      </button>
    </div>
  );
};

export default Search;
