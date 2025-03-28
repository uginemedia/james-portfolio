import React from "react";
import aboutImg from "../assets/about-img.jpg";
import downloadCvBg from "../assets/download-cv-bg.png";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section className="bg-(--section-bg)" id="about">
      <div className="container w-full mx-auto py-20 lg:px-32 px-10 flex xl:flex-row  flex-col-reverse justify-between items-center lg:gap-40">
        <div
          className="relative z-10 before:content[''] md:before:w-24 md:before:h-24 before:w-16
        before:h-16 before:bg-(--main-color) before:absolute before:top-10 md:before:-left-14 before:-left-5 after:content[''] md:after:w-32 md:after:h-32 after:w-20 after:h-20 after:border-4 after:border-(--main-color) after:absolute after:-top-6 md:after:-right-8 after:-right-4 after:-z-10 flex-5/6"
        >
          <img src={aboutImg} alt="about-image" />
          <div className="absolute md:-bottom-20 md:-left-30 -bottom-20 -left-12">
            <img
              className="md:w-fit w-42 animate-rotate"
              src={downloadCvBg}
              alt="download-cv-bg"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <FiDownload className="md:text-4xl text-2xl text-(--main-color)" />
            </button>
          </div>
        </div>
        <div>
          <span className="md:text-3xl text-2xl uppercase text-(--main-color) block text-center md:text-left">
            About Me
          </span>
          <h2 className="text-(--secondary-color) md:text-6xl text-4xl my-5 text-center md:text-left">
            I Develop System that Works
          </h2>
          <p className="text-(--text-color) leading-7 mb-10 text-center md:text-left">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia dese runt mollit anim id est laboru doloremque laudantium,
            totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto
            beatae vitae.
          </p>
          <p className="leading-7 text-(--text-color) text-center md:text-left">
            Oremque laudantium, totaeaque ipsa quae
          </p>
          <div className="my-5 py-10 border-t border-t-(--primary-color) border-b border-b-(--primary-color) flex gap-5 flex-wrap [&>div]:flex [&>div]:gap-5 text-(--text-color) md:flex-row flex-col">
            <div>
              <span>Name:</span>
              <span>James Smith</span>
            </div>
            <div>
              <span>Phone:</span>
              <span>+123 456 7890</span>
            </div>
            <div>
              <span>Age:</span>
              <span>30 Years</span>
            </div>
            <div>
              <span>Email:</span>
              <span>jamessmith@gmail.com</span>
            </div>
            <div>
              <span>Occupation:</span>
              <span>Full Stack Developer</span>
            </div>
            <div>
              <span>Nationality:</span>
              <span>England</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
