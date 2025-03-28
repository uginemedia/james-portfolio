import React from "react";
import background from "../assets/background.jpg";
import userProfile from "../assets/user-profile.png";

const Hero = () => {
  return (
    <section
      className="min-h-dvh top-0 left-0 bg-cover w-full -z-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <div className="text-(--text-color) relative top-24">
          <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center md:px-24">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
              <span className="text-(--main-color) uppercase md:text-4xl text-2xl">
                hello i'm
              </span>
              <h1 className="md:text-9xl text-5xl md:mb-4 mb-8 mt-2 md:mt-0 font-medium text-(--secondary-color)">
                James Smith
              </h1>
              <p className="mb-8 leading-8">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-(--secondary-color) bg-(--main-color) border-0 py-2 px-6 cursor-pointer focus:outline-none hover:bg-(--secondary-color) hover:text-(--main-color) rounded text-lg transition-all duration-300 ease-in">
                  Check My Work
                </button>
                <button className="ml-4 inline-flex text-(--main-color) bg-gray-100 border-0 py-2 px-6 cursor-pointer focus:outline-none rounded text-lg hover:bg-(--main-color) hover:text-(--secondary-color) transition-all duration-300 ease-in">
                  Let's Connect
                </button>
              </div>
            </div>
            <div className="relative md:w- before:absolute before:content[''] md:before:w-(--508) md:before:h-(--508) before:w-(--250) before:h-(--250) before:bg-(--primary-color) before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 z-10 before:-z-10 before:animate-zoom">
              <img
                className="object-cover object-center"
                alt="hero"
                src={userProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
