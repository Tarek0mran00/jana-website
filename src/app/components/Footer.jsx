import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image
    src="/images/J-letter.png" // Update with your logo path
    alt="Logo"
    width={50} // Adjust as needed
    height={25} // Adjust as needed
    className="text-2xl md:text-5xl text-white font-semibold"
  /></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
