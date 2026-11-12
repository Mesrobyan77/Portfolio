import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/mesrobyan77/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/khachik-mesrobyan-b78588359"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/Mesrobyan77" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="mailto:khachik.mesrobyan@gmail.com" aria-label="Email Khachik">
        <FaEnvelope size={24} />
      </a>
      <a href="tel:+37477396651" aria-label="Call Khachik">
        <FaPhone size={22} />
      </a>
    </footer>
  );
};

export default Footer;
