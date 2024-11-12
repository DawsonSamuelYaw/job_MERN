// import axios from "axios";
import React from 'react';
import Jobs from '../jobs.json';

const Job = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2148C0]">Available Jobs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Jobs.map((item) => (
            <div
              className="sub bg-white shadow-lg rounded-lg p-6 border-t-4 border-[#2148C0] transform transition duration-300 hover:scale-105"
              key={item.id}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.type}</p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-gray-500 mb-4">{item.location}</p>
              <h3 className="text-md font-semibold text-gray-800 mb-4">${item.salary}</h3>
              <div className="text-center">
                <button className="bg-[#2148C0] text-white px-4 py-2 rounded-lg hover:bg-[#1b3a8a] transition duration-200">
                  Read More..
                </button> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Job;





  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://mern-workspace-api-1.onrender.com/api/v1/jobs/all")
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data); // Logging the data directly from response
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []); // Empty dependency array to run only on mount

  // return (
  //   <div>
  //     {data.map((single, index) => (
  //       <div className="container" key={index}>
  //         <p>{single.title}</p>
  //       </div>
  //     ))}
  //   </div>