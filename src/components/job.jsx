import axios from "axios";
import { useEffect, useState } from "react";

const Job = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mern-workspace-api-1.onrender.com/api/v1/jobs/all")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, ["nashe"]);

  return (
    <div>
      {data.map((single, index) => (
        <div className="container" key={index}>
          <p>{single.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Job;
