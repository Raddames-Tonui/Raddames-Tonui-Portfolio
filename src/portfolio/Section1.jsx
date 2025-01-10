import React from "react";


const Section1 = () => (
  <div
    className="relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('books2.jpeg')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
      <h1 className="text-5xl font-bold mb-6">Educator</h1>
      <p className="text-lg mb-8">
        If you are looking for the best way to create a breathtaking educational
        website, look no further. Educator has everything you will ever need.
      </p>
      <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200">
        <span className="flex items-center text-4xl">
        
        </span>
      </button>
    </div>
  </div>
);

export default Section1;