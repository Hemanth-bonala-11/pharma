import React from 'react';
import "./AboutUs.css";
import Footer from './Footer';
import {  useSelector } from 'react-redux';

const RightContentMidComponent = () => {
  const tenant = useSelector((store)=>store.tenant.details)
  return (
    <div className="flex flex-col">
      <div className="AboutUs">
        <div className="ml-auto flex flex-col items-end justify-center h-screen sm:mx-auto sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
         
          <div className="w-full p-4 sm:mr-4 md:mr-8 text-white flex justify-end">
            <h5 className="text-4xl">Crypto For Community Support</h5>
          </div>
          <div className="w-full p-4 mt-4 sm:mr-4 md:mr-8 flex justify-end">
            <p className="text-white break-words">{tenant.title} Works for communities. The intrinsic value of the coin </p>
          </div>
          <div className="w-full p-4 mt-4 sm:mr-4 md:mr-8 flex justify-end">
            <button className="bg-transparent text-white px-4 py-2 rounded-full border border-green-500">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContentMidComponent;
