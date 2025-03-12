// Frontend (React.js)
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id} className="p-2 border-b">{job.title} - {job.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
