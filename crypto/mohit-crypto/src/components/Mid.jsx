import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const LeftContentMidComponent = () => {
  const tenant = useSelector((store)=>store.tenant.details)
  return (
    <div className="flex flex-col "> {/* Adjust the value as needed */}
      <div className="w-full p-4 text-white">
        {/* Your left content goes here */}
        <h1 className="text-4xl">{tenant?.title}</h1>
      </div>
      <div className="w-full p-4 mt-16">
        <p className="text-white">Donation Made Easy Support </p>
      </div>
      <div className="flex w-full p-4 mt-8">
        <button className="bg-green-500 text-white px-4 py-2 mr-6 rounded-full">Get Started</button>
        <button className="bg-transparent text-white px-4 py-2 rounded-full border border-green-500">Learn More</button>
      </div>
    </div>
  );
};

export default LeftContentMidComponent;


// import React, { useState, useEffect } from 'react';

// const LeftContentMidComponent = () => {
//   const [leftContentData, setLeftContentData] = useState({
//     title: 'Loading...',
//     description: 'Loading...',
//     getStartedButtonText: 'Loading...',
//     learnMoreButtonText: 'Loading...',
//   });

//   useEffect(() => {
//     // Fetch data from Django API endpoint
//     fetch('/api/left-content-data') // Replace with your Django API endpoint
//       .then((response) => response.json())
//       .then((data) => setLeftContentData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="flex flex-col"> {/* Adjust the value as needed */}
//       <div className="w-full p-4 text-white">
//         {/* Your left content goes here */}
//         <h1 className="text-4xl">{leftContentData.title}</h1>
//       </div>
//       <div className="w-full p-4 mt-16">
//         <p className="text-white">{leftContentData.description}</p>
//       </div>
//       <div className="flex w-full p-4 mt-8">
//         <button className="bg-green-500 text-white px-4 py-2 mr-6 rounded-full">{leftContentData.getStartedButtonText}</button>
//         <button className="bg-transparent text-white px-4 py-2 rounded-full border border-green-500">{leftContentData.learnMoreButtonText}</button>
//       </div>
//     </div>
//   );
// };

// export default LeftContentMidComponent;

