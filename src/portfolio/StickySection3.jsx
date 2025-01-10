import React from "react";

const StickySection3 = () => (
  <div
    className="h-screen sticky top-0 bg-cover bg-center"
    style={{ backgroundImage: `url('books2.jpeg')` }}
  >
    <div className="absolute inset-0 bg-background-400 "></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
      <h1 className="text-5xl font-bold mb-6">Inspire</h1>
      <p className="text-lg">
        Inspire future generations with bold ideas and actions.
      </p>
    </div>
  </div>
);

export default StickySection3;