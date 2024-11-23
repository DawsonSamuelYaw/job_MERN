import React, { useState } from 'react';
import { CiSaveDown2 } from "react-icons/ci";
import Jobs from '../jobs.json';

const Job = () => {
  const [savedJobs, setSavedJobs] = useState([]);

Jobs.forEach((h)=>{
  console.log(h.description)

})
  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      // Remove from saved jobs
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      // Add to saved jobs
      setSavedJobs([...savedJobs, jobId]);
    }
    console.log(setSavedJobs)
  };

  return (
    <>
      <div className="container mx-auto p-6 font-[poppins]">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2148C0]">Available Jobs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*   <div className="hello grid grid-cols-3">
            {Jobs.forEach((y)=>(
              <div className="sub" key={y.id}>
                <h1>{y.description}</h1>

              </div>

            ))}

          </div> */}
          {Jobs.map((item) => (
            <div
              className="sub bg-white shadow-lg rounded-lg p-6 border-t-2 border-[#2148C0] transform transition duration-300 hover:scale-105"
              key={item.id}
            >
              <div className="flex flex-row-reverse my-4">
                <button onClick={() => toggleSaveJob(item.id)} className="focus:outline-none">
                  <CiSaveDown2 
                    className={`text-2xl transition-colors duration-200 ${
                      savedJobs.includes(item.id) ? "text-black" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.type}</p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-gray-500 mb-4">{item.location}</p>
              <h3 className="text-md font-semibold text-red-600 mb-4">{item.salary}</h3>
              <div className="text-center">
                <button className="bg-[#2148C0] text-white w-full py-2 rounded-lg hover:bg-transparent hover:text-[#2148C0] transition duration-200 hover:border hover:border-[#2148C0]">
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
