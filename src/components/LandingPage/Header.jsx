import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { logo } from "../../constants";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md">
      <div className="backdrop-blur-sm bg-white/40">
        <div className="flex w-full justify-between items-center gap-5 py-3 wrapper">
          <ScrollLink
            to="banner"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              src={logo}
              alt="logo"
              width="150"
              height="100"
              decoding="async"
              className="w-[6rem] sm:w-[8rem] object-contain"
            />
          </ScrollLink>
          <div
            data-aos="fade-down"
            className="hidden lg:flex items-center gap-10"
          >
            <Link
              to="/"
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Home
            </Link>
            <Link to="/about-us" className="text-md cursor-pointer">
              About Us
            </Link>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              className="primary-btn"
            >
              Contact Us
            </ScrollLink>
          </div>
          <button
            title="Menu"
            className="block lg:hidden justify-self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              color="#000000"
              size="26"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[3rem] object-contain"
          />
          <button
            title="Close"
            onClick={() => setIsOpen(false)}
            className="text-white bg-primary rounded-full p-2 text-[1.5rem] hover:rotate-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          <ScrollLink
            to="banner"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary relative overflow-hidden cursor-pointer group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <Link to="/about-us" className="text-2xl font-medium block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary relative overflow-hidden group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <ScrollLink
            to="services"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary relative overflow-hidden cursor-pointer group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-2xl font-medium block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary relative overflow-hidden cursor-pointer group"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
          <ScrollLink
            to="contact"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-primary/10 text-primary relative overflow-hidden cursor-pointer group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
