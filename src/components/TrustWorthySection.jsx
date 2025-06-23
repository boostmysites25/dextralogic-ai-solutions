import React from "react";
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaGlobe } from "react-icons/fa";
import CountUp from "react-countup";

const TrustWorthySection = () => {
  return (
    <section className="py-[2rem]">
      <div className="wrapper text-center">
        <h2 data-aos="fade-up" className="heading max-w-6xl mx-auto">
          Transforming Ideas into Digital Excellence
        </h2>
        <p data-aos="fade-up" className="description max-w-6xl mx-auto mt-2">
          Our team of passionate technologists and creative minds work together to deliver 
          innovative solutions that help businesses thrive in the digital landscape. We combine 
          technical expertise with strategic thinking to create meaningful digital experiences.
        </p>

        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-4 gap-3 lg:gap-6 mt-14 mb-5 bg-primary/5 p-5"
        >
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 lg:border-l-0 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] lg:text-[4rem] font-semibold">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={3}
                  end={95}
                  suffix="%"
                />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-blue-500 bg-opacity-25 p-4 flex justify-center items-center">
                <FaLaptopCode className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] text-blue-600" />
              </div>
            </div>
            <p className="text-gray-800 text-xl leading-tight text-start">
              Client Satisfaction
            </p>
          </div>
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 lg:border-l-2 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] lg:text-[4rem] font-semibold">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  end={200}
                  suffix="+"
                />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-purple-400 bg-opacity-20 p-4 flex justify-center items-center">
                <FaMobileAlt className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] text-purple-600" />
              </div>
            </div>
            <p className="text-gray-800 text-xl leading-tight text-start">
              Digital Solutions
            </p>
          </div>
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 lg:border-l-2 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] lg:text-[4rem] font-semibold">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  end={15}
                  suffix="+"
                />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-green-400 bg-opacity-20 p-4 flex justify-center items-center">
                <FaShoppingCart className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] text-green-600" />
              </div>
            </div>
            <p className="text-gray-800 text-xl leading-tight text-start">
              Global Markets
            </p>
          </div>
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 lg:border-l-2 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] lg:text-[4rem] font-semibold">
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  end={8}
                  suffix="+"
                />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-orange-400 bg-opacity-20 p-4 flex justify-center items-center">
                <FaGlobe className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] text-orange-600" />
              </div>
            </div>
            <p className="text-gray-800 text-xl leading-tight text-start">
              Industry Expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustWorthySection;
