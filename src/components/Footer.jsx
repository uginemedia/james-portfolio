import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-(--section-bg)">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href=""
          className="text-(--secondary-color) text-4xl font-semibold [&>span]:text-(--main-color)"
        >
          <span>J</span>
          ames
        </a>
        <p className="text-sm text-(--text-color) sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-(--text-color) sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} U-GINE MEDIA —
          <a
            href="https://uginemedia.com"
            className="text-(--text-gray) ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @uginemedia
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-(--text-color)">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a className="ml-3 text-(--text-color)">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a className="ml-3 text-(--text-color)">
            <AiFillInstagram className="w-5 h-5" />
          </a>
          <a className="ml-3 text-(--text-color)">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
