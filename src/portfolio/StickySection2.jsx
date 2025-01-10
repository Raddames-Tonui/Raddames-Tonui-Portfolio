import React from 'react';

const StickySection2 = () => (
  <div
    className="h-screen sticky top-0 bg-cover bg-center"
    style={{ backgroundImage: `url('books2.jpeg')` }} // Replace with your image
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
      <h1 className="text-5xl font-bold mb-6">Effortless Financial <br />Management for Schools</h1>
      <p className="text-lg">
        Simplify school fee management with Educator Finance,<br /> offering smooth cashflow tracking, receipt generation, pledge management, expense tracking, and insightful reports.
      </p>
    </div>
  </div>
);

export default StickySection2;