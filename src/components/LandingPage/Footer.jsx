import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails, logo } from "../../constants";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-tertiary py-[3rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img
            fetchPriority="high"
            src={logo}
            width="150"
            height="100"
            alt="logo"
            className="w-[14rem] object-contain p-3 rounded-lg bg-white"
          />
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
        <div className="">
          <div className="flex mt-3 gap-5 justify-start">
            <Link to={clientDetails.linkedin} target="_blank">
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to={clientDetails.instagram} target="_blank">
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link to={clientDetails.facebook} target="_blank">
              <GrFacebookOption className="text-2xl" />
            </Link>
            <Link to={clientDetails.youtube} target="_blank">
              <FaYoutube className="text-2xl" />
            </Link>
            <Link to={clientDetails.twitter} target="_blank">
              <BsTwitterX className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
