import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-lime-500 py-12">
     
      <hr className="mx-10 lg:mx-20 my-10 border-lime-500" />

      <div className="text-center text-md">
        <p>&copy; {currentYear} @raddames tonui. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
