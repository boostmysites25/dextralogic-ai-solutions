import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { allServices, clientDetails, logo } from "../../constants";
import { createUrlParam } from "../../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-[3rem] text-white">
      <div className="wrapper mx-auto px-5 sm:px-10 flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img
            fetchPriority="high"
            src={logo}
            width="150"
            height="100"
            alt="logo"
            className="w-[14rem] object-contain p-3 rounded-lg bg-white"
          />
          <p className="max-w-[25rem]">
            Follow us on our social media handles to keep up to date with our
            latest work and announcements.
          </p>

          <div className="flex mt-3 gap-5 items-center">
            <Link to="#">
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to="#">
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link to="#">
              <GrFacebookOption className="text-2xl" />
            </Link>
          </div>

          <div className="space-y-2 flex flex-col mt-5">
            <Link to={`mailto:${clientDetails.email}`} className="">
              {clientDetails.email}
            </Link>
            <Link to={`tel:${clientDetails.phone}`} className="">
              +{clientDetails.phone}
            </Link>
            <p className="">{clientDetails.address}</p>
          </div>
        </div>
        <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-7 md:gap-14">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Our Services</p>
            {allServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${createUrlParam(item.title)}`}
                className="cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link to="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
