import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaMedium,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/_.praj.wal._/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/PrajwalMD18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/prajwal-m-d"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/Prajwal18-MD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://medium.com/@prajju.18gryphon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium size={24} />
      </a>
    </footer>
  );
};

export default Footer;
