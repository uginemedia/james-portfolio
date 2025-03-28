import React from "react";
import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import service4 from "../assets/service-4.png";

const Service = () => {
  return (
    <section className="bg-(--section-bg)" id="services">
      <div className="container w-full mx-auto py-20 lg:px-32 px-10">
        <div className="text-center">
          <span className="uppercase text-(--main-color) text-xl tracking-[5px] mb-3 inline-block">
            service
          </span>
          <h2 className="text-(--secondary-color) md:text-5xl text-4xl font-medium">
            What I Offer
          </h2>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-5 grid-cols-subgrid">
          {/* Service 01 */}
          <div className="w-full bg-(--primary-color) px-10 py-14 rounded-xl flex md:gap-10  gap-5 md:flex-nowrap flex-wrap">
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={service1}
              alt="service-1"
            />
            <div>
              <h3 className="md:text-3xl text-2xl text-(--secondary-color) font-semibold mb-5">
                Web Development
              </h3>
              <p className="text-(--text-color) text-lg">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Service 02 */}
          <div className="w-full bg-(--primary-color) px-10 py-14 rounded-xl flex md:gap-10 gap-5 md:flex-nowrap flex-wrap">
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={service2}
              alt="service-2"
            />
            <div>
              <h3 className="md:text-3xl text-2xl text-(--secondary-color) font-semibold mb-5">
                Software Development
              </h3>
              <p className="text-(--text-color) text-lg">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Service 03 */}
          <div className="w-full bg-(--primary-color) px-10 py-14 rounded-xl flex md:gap-10 gap-5 md:flex-nowrap flex-wrap">
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={service3}
              alt="service-3"
            />
            <div>
              <h3 className="md:text-3xl text-2xl text-(--secondary-color) font-semibold mb-5">
                System Development
              </h3>
              <p className="text-(--text-color) text-lg">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Service 04 */}
          <div className="w-full bg-(--primary-color) px-10 py-14 rounded-xl flex md:gap-10 gap-5 md:flex-nowrap flex-wrap">
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={service4}
              alt="service-4"
            />
            <div>
              <h3 className="md:text-3xl text-2xl text-(--secondary-color) font-semibold mb-5">
                Security Analysis
              </h3>
              <p className="text-(--text-color) text-lg">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
