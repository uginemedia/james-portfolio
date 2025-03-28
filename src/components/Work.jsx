import React from "react";
import workImg from "../assets/work-img.png";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import { GoArrowRight } from "react-icons/go";

const Work = () => {
  return (
    <section className="bg-(--primary-color)" id="works">
      <div className="container w-full mx-auto py-20 lg:px-32 px-10 flex xl:flex-row flex-wrap flex-col-reverse justify-between items-center lg:gap-0 gap-10">
        <div className="xl:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="work-img"
            className="object-cover object-center w-full h-full"
            src={workImg}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 xl:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="mb-3">
              <img className="w-12" src={work1} alt="work-1" />
            </div>
            <div className="flex-grow">
              <h2 className="text-(--secondary-color) md:text-3xl text-2xl font-medium mb-3">
                Senior System Engineer
              </h2>
              <p className="leading-relaxed text-(--text-color)">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href=""
                className="mt-3 text-(--main-color) inline-flex items-center justify-center gap-2"
              >
                Learn More
                <span>
                  <GoArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="mb-3">
              <img className="w-12" src={work2} alt="work-2" />
            </div>
            <div className="flex-grow">
              <h2 className="text-(--secondary-color) md:text-3xl text-2xl font-medium mb-3">
                Data Architect
              </h2>
              <p className="leading-relaxed text-base text-(--text-color)">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href=""
                className="mt-3 text-(--main-color) inline-flex items-center gap-2"
              >
                Learn More
                <GoArrowRight />
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:items-start items-center">
            <div className="mb-3">
              <img className="w-12" src={work3} alt="work-3" />
            </div>
            <div className="flex-grow">
              <h2 className="text-(--secondary-color) md:text-3xl text-2xl font-medium mb-3">
                Web Developer
              </h2>
              <p className="leading-relaxed text-base text-(--text-color)">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href=""
                className="mt-3 text-(--main-color) inline-flex items-center gap-2"
              >
                Learn More
                <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
