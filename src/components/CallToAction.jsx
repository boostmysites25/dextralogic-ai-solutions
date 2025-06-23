import React from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="flex flex-col wrapper bg-primary/15 gap-4 items-center pt-[3rem] pb-[3rem] mb-[2rem]">
      <h1 className="heading text-center max-w-6xl mx-auto">
        Transform Your Digital Presence with Innovative Solutions
      </h1>
      <p className="description text-center max-w-6xl mx-auto">
        Ready to elevate your business in the digital world? Our team of experts
        specializes in creating custom digital strategies that drive results.
        Whether you need a stunning website, powerful mobile app, or
        comprehensive digital marketing campaign, we have the expertise to bring
        your vision to life.
      </p>
      <Link
        to="/contact-us"
        className="primary-btn rounded-full w-fit mt-4 flex items-center gap-2"
      >
        <span>Schedule a Strategy Session</span>
        <FaRocket className="text-lg" />
      </Link>
    </div>
  );
};

export default CallToAction;
