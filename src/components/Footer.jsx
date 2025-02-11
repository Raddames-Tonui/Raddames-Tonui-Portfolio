import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-lime-500 py-5 md:py-12 flex justify-center">
      <div className="w-full lg:max-w-[70vw]">
        {/* Horizontal Line Before the Text */}
        <hr className="mx-10 lg:mx-20 my-5 md:my-10 border-lime-500" />

        <div className="text-center text-md">
          <p>&copy;{currentYear} @Raddames Tonui. <br /> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
